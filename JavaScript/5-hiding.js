'use strict';

class Rectangle {
  constructor(height, width) {
    this.getArea = () => height * width;
  }

  get area() {
    return this.getArea();
  }
}

// Usage

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
