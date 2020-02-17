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

// Usage

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
