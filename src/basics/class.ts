class Robot {
  // protected _name: string;
  // _color: string;
  

  static availableColors = ['green', 'yellow'];
  static isColorAvailable(color: string):boolean {
    return Robot.availableColors.includes(color);
  }

  constructor(protected _name: string, _color: string ) {}

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }

  set color(color: string) {
    if (!Robot.isColorAvailable(color)) {
      throw new Error(`Color ${color} is not available`);
    }
    this.color = color;
  }

  set name(value: string) {
    this._name = 'PREFIX_' + value;
  }

  get name() {
    return this._name + '_SUFFIX';
  }
}

class FlyingRobot extends Robot {
  jetpackSize: number;

  constructor(name: string) {
    super(name);
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(`${this.name} is flying`);
    super.move(distance);
  }
}

const robot = new Robot('John');
robot.askName();

const flyingRobot = new FlyingRobot('Jim', 2);
flyingRobot.move(10);