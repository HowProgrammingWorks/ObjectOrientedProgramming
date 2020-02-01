'use strict';

// Case 2: Active entity
// for example: Collection, Stream, Scheduler

class Collection {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(key, value) {
    this.keys.push(key);
    this.values.push(value);
  }

  get(key) {
    const index = this.keys.indexOf(key);
    if (index === -1) return;
    return this.values[index];
  }
}

// Usage

const collection = new Collection();
collection.set('name', 'Marcus Aurelius');
const name = collection.get('name');
console.dir({ name });
