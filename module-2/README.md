# Module-2.Advanced Types of TypeScript

### Module-2.1.Type Assertion in TypeScript:

Type assertion is a way to tell the TypeScript compiler that you know more about a value than what it actually is. It allows you to tell the compiler that a value is of a certain type, even if it's not known at compile time.

```typescript
let anything: any;
anything = "Next Level Web Development";
anything = 123;
(anything as number).toExponential();
```

- Note: Use Type Assertion in Array and Function type.(Best Practice)

---

### Module-2.2.Interface in TypeScript:

Interfaces are a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
interface Developer {
  name: string;
  age: number;
}
```

- Note: Use Interface in Object type.(Best Practice)

---

### Module-2.3.Generics in TypeScript:

Generics are a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
type GenericArray<T> = Array<T>;
```

also use Generics in Tuple type.

```typescript
type GenericTuple<X, Y> = [X, Y];
```

---

### Module-2.4.Generics-Interface in TypeScript:

Generics-Interface is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseDate: number;
  };
  smartWatch: T;
  bike?: X;
}
```

---

### Module-2.5.Generics-Function in TypeScript:

Generics-Function is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGenerics = <T>(param: T): T[] => {
  return [param];
};
```

also use Generics-Function in Tuple type.

```typescript
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};
```

---
