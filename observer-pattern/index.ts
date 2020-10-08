interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer):void;
  notifyObservers():void;
}

interface Observer {
  update(newVideo: object): void;
}

interface Video {
  title: string
}

class Youtuber implements Subject {
  observers: Array<Observer>;
  video: Video;

  constructor() {
    this.observers = [];
    this.video = { title: 'init' };
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    this.observers = this.observers.splice(index, 1);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.video);
    });
  }

  setVideo() {
    this.video = { title: new Date().getTime().toString()};
    this.notifyObservers();
  }
}

class User implements Observer {
  subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(video: Video) {
    this.display(video);
  }

  unsubscribe() {
    this.subject.removeObserver(this);
  }

  display(video: Video) {
    console.log('video:' + video.title);
  }
}

const youtuber = new Youtuber();
const user = new User(youtuber);
const user2 = new User(youtuber);
const user3 = new User(youtuber);
youtuber.setVideo();

user2.unsubscribe();
console.log('user2 unsubscribe');
user3.unsubscribe();
console.log('user3 unsubscribe');
youtuber.setVideo();
