'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

class Polygon {
  constructor(...points) {
    this.points = points;
  }

  get area() {
    let value = 0;
    let d = this.points[this.points.length - 1];
    for (const p of this.points) {
      value += p.x * d.y - d.x * p.y;
      d = p;
    }
    return Math.abs(value) / 2;
  }

  toString() {
    return this.points.map((p) => p.toString()).join('; ');
  }
}

class Rect extends Polygon {
  constructor(x1, y1, x2, y2) {
    const a = new Point(x1, y1);
    const b = new Point(x2, y1);
    const c = new Point(x2, y2);
    const d = new Point(x1, y2);
    super(a, b, c, d);
  }
}

class Triangle extends Polygon {
  constructor(x1, y1, x2, y2, x3, y3) {
    const a = new Point(x1, y1);
    const b = new Point(x2, y2);
    const c = new Point(x3, y3);
    super(a, b, c);
  }
}

class Geometry {
  static rotate(polygon, angle) {
    const { points } = polygon;
    const radians = Math.PI / 180 * angle;
    const sin = Math.sin(radians);
    const cos = Math.cos(radians);
    for (const point of points) {
      const { x, y } = point;
      point.x = x * cos - y * sin;
      point.y = x * sin + y * cos;
    }
  }
}

// Usage

const rect = new Rect(10, 10, 30, -10);
console.dir(rect);
console.dir(rect.area);

console.log('Rotate 45');
Geometry.rotate(rect, 45);
console.dir(rect);
console.dir(rect.area);

const triangle = new Triangle(0, 0, 15, 0, 0, 15);
console.dir(triangle);
console.log('Rotate 90');
Geometry.rotate(triangle, 90);
console.dir(triangle);
console.dir(triangle.area);
console.dir(`${triangle}`);
