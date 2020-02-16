'use strict';

// Case 1: Information model

class Passport {
  constructor(id, name, city, birthday) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.birthday = birthday;
  }
}

// Usage

const passport = new Passport('AA112233', 'Marcus', 'Roma', new Date());
console.dir({ passport });
