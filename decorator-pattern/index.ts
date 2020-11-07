abstract class Beverage {
  description!: string;

  abstract getCost(): number;

  getDescription(): string {
    return this.description;
  }
}

class MilkTea extends Beverage {

  constructor() {
    super();
    this.description = 'Milk Tea';
  }

  getCost() {
    return 50;
  }
}

class GreenTea extends Beverage {
  
  constructor() {
    super();
    this.description = 'Green Tea';
  }
  
  getCost() {
    return 40;
  }
}

abstract class CondimentDecorator extends Beverage {
  abstract getCost(): number;
  abstract getDescription(): string;
}

class Bubble extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Bubble';
  }

  getCost() {
    return this.beverage.getCost() + 10;
  }
}

class Pudding extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Pudding';
  }

  getCost() {
    return this.beverage.getCost() + 20;
  }
}

console.log('Start');
const beverage = new MilkTea();
console.log(beverage.getDescription());
console.log(beverage.getCost());

const bubbleMilkTea = new Bubble(new MilkTea());
console.log(bubbleMilkTea.getDescription());
console.log(bubbleMilkTea.getCost());

const powerTea = new Pudding(new Bubble(new Bubble(new MilkTea())));
console.log(powerTea.getDescription());
console.log(powerTea.getCost());
