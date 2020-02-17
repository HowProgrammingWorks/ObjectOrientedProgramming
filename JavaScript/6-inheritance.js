'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  get side() {
    return this.height;
  }
}

// Usage

const square = new Square(100);
console.dir({ square });
console.log('square.area:', square.area);
console.log('square.side:', square.side);
