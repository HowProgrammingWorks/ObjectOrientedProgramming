## Object-oriented programming

### OOP principles

1. Abstraction — encapsulate internals, isolate complexity, expose interface, and hide details.
2. Class — user-defined type representing an abstraction; encapsulates state and behavior to improve code reuse.
3. Encapsulation — bind data with its behavior and expose only a minimal interface.
4. Inheritance — extend functionality, and narrow type; derive specialized subtypes from a base to reuse and extend behavior.
5. Polymorphism — same call, different implementations; let each receiver provide its own.
6. Structural Composition — build higher-level, more complex abstractions by combining smaller collaborating parts.
7. Aggregation — a whole references parts with an independent lifecycle; loose ownership.
8. Separation of Concerns — isolate responsibilities by separate implementations to reduce coupling and cognitive complexity.
9. Dependency Injection — pass dependencies from outside (via constructor, fields, or setters) and store them in fields.
10. Tell, Don’t Ask — give objects the job themselves rather than pulling out their data and doing the work elsewhere.
11. Mutable vs Immutable — prefer state that never changes after creation for safety; prefer mutable state for performance and memory optimization.
12. Duck Typing — rely on contracts and object compatibility by behavior rather than inheritance hierarchy.
13. Entity vs Value Object — entities are tracked by ID, values by content equality.
14. Delegation — forward work to a collaborator (separate abstraction) for code reuse or flexibility.
15. Information Hiding — keep state private, expose only controlled behavior.
16. Law of Demeter (LoD) — talk only to your immediate collaborators; avoid deep access by multiple dots.
17. Generics — parametric types that let code be written once and reused for many concrete types while preserving type safety.
18. Resource allocation: Constructor, destructor, disposable — a constructor acquires resources; a destructor releases resources automatically at object end-of-life; a disposable is an explicit protocol to release unmanaged resources deterministically.

### Old lectures

[![Have Objects Failed? Или что не так с ООП?](https://img.youtube.com/vi/4yO5OS0vPSw/0.jpg)](https://www.youtube.com/watch?v=4yO5OS0vPSw)

[![ООП: построение абстракций, инкапсуляция и сокрытие](https://img.youtube.com/vi/sQwF6-bYeDM/0.jpg)](https://youtu.be/sQwF6-bYeDM)
