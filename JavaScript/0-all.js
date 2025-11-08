'use strict';

class Amount {
  // Abstraction with mutable state
  #value = 0; // Private state, Hiding, Encapsulation

  constructor(initial = 0) {
    this.#value = initial;
  }

  update(delta) {
    // Public interface: method
    this.#value += delta; // Implementation, Encapsulation
    return this.#value;
  }

  get value() {
    // Public interface: getter
    return this.#value; // Implementation, Encapsulation
  }
}

class Spending extends EventTarget {
  // Inheritance
  #amount = new Amount(); // Structural Composition

  update(delta = 1) {
    const value = this.#amount.update(delta); // Delegation
    const detail = { value, delta };
    this.dispatchEvent(new CustomEvent('change', { detail }));
    return value;
  }

  get value() {
    return this.#amount.value; // Delegation
  }
}

const config = { available: 10000 }; // Immutable configuration

const budget = new Amount(config.available); // Value Object
const spending = new Spending(); // Entity
const balance = new Amount(config.available);

const report = (purchase, logger) => {
  // Dependency Injection
  for (const [key, instance] of Object.entries(purchase)) {
    logger(`${key}: ${instance.value}`); // Polymorphism
  }
};

spending.addEventListener('change', (event) => {
  const { value, delta } = event.detail;
  balance.update(-delta); // Tell Don't Ask
  console.log({ event: event.type, value, delta });
});

spending.update(1023);
spending.update(1507);
spending.update(1010);

const purchase = { budget, spending, balance }; // Aggregation
report(purchase, console.log); // Dependency Injection
