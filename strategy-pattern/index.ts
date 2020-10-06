interface AccelerateBehavior {
  accelerate();
}

class AccelerateWithEngine implements AccelerateBehavior {
  accelerate() {
    console.log('引擎驅動');
  }
}

class AccelerateWithPerson implements AccelerateBehavior {
  accelerate() {
    console.log('人力驅動');
  }
}

class AccelerateWithBattery implements AccelerateBehavior {
  accelerate() {
    console.log('電池驅動');
  }
}

class Car {
  accelerateBehavior: AccelerateBehavior;

  constructor(accelerateBehavior) {
    this.setAccelerateBehavior(accelerateBehavior);
  }

  setAccelerateBehavior(accelerateBehavior) {
    this.accelerateBehavior = accelerateBehavior;
  }

  accelerate() {
    this.accelerateBehavior.accelerate();
  }
}

const car = new Car(new AccelerateWithEngine());
car.accelerate(); // 引擎驅動
car.setAccelerateBehavior(new AccelerateWithBattery());
car.accelerate(); // 電池驅動
