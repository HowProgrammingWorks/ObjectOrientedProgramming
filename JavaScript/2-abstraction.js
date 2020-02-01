'use strict';

const { EventEmitter } = require('events');

// Case 2: Active entity
// for example: Collection, Stream, Scheduler

class Collection extends EventEmitter {
  constructor() {
    super();
    this.keys = [];
    this.values = [];
  }

  set(key, value) {
    const index = this.keys.indexOf(key);
    if (index === -1) {
      this.keys.push(key);
      this.values.push(value);
    } else {
      const previous = this.values[index];
      this.values[index] = value;
      this.emit('rewrite', key, value, previous);
    }
  }

  get(key) {
    const index = this.keys.indexOf(key);
    if (index === -1) return;
    return this.values[index];
  }
}

// Usage

const collection = new Collection();
collection.on('rewrite', (key, value, previous) => {
  console.log('rewrite', { key, value, previous });
});
collection.set('name', 'Marcus');
collection.set('name', 'Marcus Aurelius');
const name = collection.get('name');
console.dir({ name });
