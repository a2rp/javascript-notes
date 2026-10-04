# 7. Prototypes and classes

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Objects and properties](./06-objects-and-properties.md) | [Notes index](../README.md) | [Next: Built-in collections](./08-built-in-collections.md) |

JavaScript objects can inherit behavior through a prototype chain. Classes provide a familiar syntax for creating objects that share methods, but the prototype system still provides the behavior underneath.

## The prototype chain

When code reads a property, JavaScript first checks the object itself. If the property is not found, it checks the object's prototype, then continues up the chain until it finds the property or reaches null.

~~~js
const animal = {
  speak() {
    return "A sound";
  },
};

const dog = Object.create(animal);
dog.name = "Rex";

console.log(dog.name);
console.log(dog.speak());
console.log(Object.getPrototypeOf(dog) === animal);
~~~

The dog object has its own name property. Its speak method comes from animal. Most object literals inherit from Object.prototype, which is why they have methods such as toString.

Use Object.hasOwn when you need to know whether a property belongs directly to an object. Avoid adding application behavior to built-in prototypes, because that can conflict with other code.

## Create objects with class syntax

A class describes how instances are created. The constructor runs when new creates an instance. Methods declared in the class body are placed on the class prototype, so instances share the same method.

~~~js
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    return this.title + " by " + this.author;
  }
}

const book = new Book("Small Steps", "Mira");
console.log(book.describe());
~~~

The constructor initializes each instance. A class method can read instance fields through this. Call methods through the instance so this refers to the expected object.

## Use private fields for internal state

A field beginning with # is private to the class body. Code outside the class cannot read or write it directly.

~~~js
class Counter {
  #value = 0;

  increment() {
    this.#value += 1;
  }

  get value() {
    return this.#value;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.value);
~~~

Private fields are useful when callers should use a method that enforces a rule instead of editing internal state directly.

## Inherit only for a real subtype

A subclass uses extends. Its constructor calls super before using this, and super invokes the parent constructor.

~~~js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound";
  }
}

class Dog extends Animal {
  speak() {
    return this.name + " barks";
  }
}

const pet = new Dog("Rex");
console.log(pet.speak());
~~~

The child method overrides the parent method with the same name. Use inheritance when a child truly can be used anywhere the parent type is expected. Avoid deep class trees that spread behavior across many levels.

## Prefer composition for assembled behavior

Composition builds an object from smaller objects or functions. A car has an engine, for example. The car can delegate engine-specific work instead of inheriting from an engine class.

~~~js
const engine = {
  start() {
    return "Engine started";
  },
};

const car = {
  engine,
  start() {
    return this.engine.start();
  },
};

console.log(car.start());
~~~

Composition makes it easier to replace one part without changing a parent class hierarchy. Choose the smallest design that clearly expresses the relationship.

## Key points

- Property lookup follows an object's prototype chain.
- Class syntax creates instances whose methods are shared through a prototype.
- A constructor initializes an instance created with new.
- Private fields use a # prefix and can only be accessed inside their class.
- A subclass can reuse or override behavior from a parent class.
- Composition is useful when an object is made from cooperating parts.

## Practice questions

1. Where does JavaScript look after an object does not have a requested property?
2. What does Object.create do in the example?
3. Where are class methods placed?
4. What must a subclass constructor call before it uses this?
5. How is a private field written?
6. What does method overriding mean?
7. When is inheritance a good fit?
8. What does composition mean in the car example?

## Main references

- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN: Private elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
