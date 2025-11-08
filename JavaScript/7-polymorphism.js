'use strict';

class Cache {
  constructor() {
    if (this.constructor === Cache) {
      throw new Error('Abstract class should not be instanciated');
    }
    this.allocated = 0;
  }

  read(key) {
    const data = JSON.stringify({ read: { key } });
    const method = `${this.constructor.name}.read(${data})`;
    throw new Error(`Method ${method} is not implemented`);
  }

  add(key, val) {
    const data = JSON.stringify({ add: { key, val } });
    const method = `${this.constructor.name}.add(${data})`;
    throw new Error(`Method ${method} is not implemented`);
  }

  delete(key) {
    const data = JSON.stringify({ delete: { key } });
    const method = `${this.constructor.name}.add(${data})`;
    throw new Error(`Method ${method} is not implemented`);
  }
}

class MapCache extends Cache {
  constructor() {
    super();
    this.data = new Map();
  }

  read(key) {
    return this.data.get(key);
  }

  add(key, val) {
    const prev = this.data.get(key);
    if (prev) this.allocated -= prev.length;
    this.allocated += val.length;
    this.data.set(key, val);
  }

  delete(key) {
    const val = this.data.get(key);
    if (val) {
      this.allocated -= val.length;
      this.data.delete(key);
    }
  }
}

class ObjectCache extends Cache {
  constructor() {
    super();
    this.data = {};
  }

  read(key) {
    return this.data[key];
  }

  add(key, val) {
    const prev = this.data[key];
    if (prev) this.allocated -= prev.length;
    this.allocated += val.length;
    this.data[key] = val;
  }

  delete(key) {
    const val = this.data[key];
    if (val) {
      this.allocated -= val.length;
      delete this.data[key];
    }
  }
}

// Usage

const mapCache = new MapCache();
mapCache.add('key1', 'value1');
mapCache.add('key2', 'value2');
mapCache.delete('key2');
console.dir(mapCache);

const objCache = new ObjectCache();
objCache.add('key1', 'value1');
objCache.add('key2', 'value2');
objCache.delete('key2');
console.dir(objCache);
