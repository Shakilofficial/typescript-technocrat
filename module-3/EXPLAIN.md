# Module-3: টাইপস্ক্রিপ্টে অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিং

## অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিং এর পরিচিতি:

অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিং (OOP) একটি প্রোগ্রামিং প্যারাডাইম যা অবজেক্ট ব্যবহার করে ডেটা উপস্থাপন এবং পরিচালনা করে। এটি একটি শক্তিশালী পদ্ধতি যা মডুলার এবং পুনঃব্যবহারযোগ্য কোড তৈরি করতে সহায়তা করে। OOP ক্লাসের ধারণার উপর ভিত্তি করে তৈরি, যা অবজেক্ট তৈরির নীলনকশা হিসাবে কাজ করে।

OOP-তে, অবজেক্টগুলি ক্লাসের উদাহরণ। একটি ক্লাসে অবজেক্টের জন্য প্রয়োজনীয় প্রোপার্টি এবং আচরণ সংজ্ঞায়িত করা হয়। উদাহরণস্বরূপ, একটি "Person" ক্লাসে "name" এবং "age" প্রোপার্টি থাকতে পারে এবং "walk" এবং "talk" এর মতো আচরণ থাকতে পারে।

OOP সফটওয়্যার ডেভেলপমেন্টে একটি মৌলিক ধারণা এবং টাইপস্ক্রিপ্ট OOP সমর্থনকারী একটি শক্তিশালী ভাষা। এই মডিউলে আমরা টাইপস্ক্রিপ্টে OOP-এর ভিত্তি যেমন ক্লাস, উত্তরাধিকার (Inheritance), পলিমরফিজম, অ্যাবস্ট্রাকশন, এনক্যাপসুলেশন ইত্যাদি সম্পর্কে আলোচনা করবো।

---

### Module-3.1: ক্লাস এবং অবজেক্ট:

টাইপস্ক্রিপ্টে একটি ক্লাস অবজেক্ট তৈরির নীলনকশা হিসেবে কাজ করে। এটি ক্লাসের অবজেক্টগুলোতে কী কী প্রোপার্টি এবং মেথড থাকবে তা সংজ্ঞায়িত করে। একটি উদাহরণ নিচে দেওয়া হলো:

```typescript
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
```

উপরের উদাহরণে, `Animal` ক্লাসে তিনটি প্রোপার্টি রয়েছে: `name`, `species`, এবং `sound`। এছাড়াও একটি কনস্ট্রাক্টর রয়েছে, যা এই প্রোপার্টিগুলি ইনিশিয়ালাইজ করতে ব্যবহৃত হয়। `makeSound` মেথডটি একটি বার্তা প্রিন্ট করে যা প্রাণীর নাম এবং শব্দকে অন্তর্ভুক্ত করে।

`new` কীওয়ার্ড ব্যবহার করে আমরা `Animal` ক্লাসের একটি ইনস্ট্যান্স তৈরি করতে পারি:

```typescript
const dog = new Animal("Dog", "Canis lupus familiaris", "Ghew Ghew");
const cat = new Animal("Cat", "Felis catus", "Meow");
```

এতে দুটি `Animal` ক্লাসের ইনস্ট্যান্স তৈরি হবে, যার `name`, `species`, এবং `sound` ভিন্ন।

অবজেক্টের প্রোপার্টি এবং মেথড অ্যাক্সেস করতে ডট নোটেশন ব্যবহার করা যায়:

```typescript
dog.makeSound(); // Output: The Dog says Ghew Ghew
cat.makeSound(); // Output: The Cat says Meow
```

---

### Module-3.2: উত্তরাধিকার (Inheritance):

উত্তরাধিকার OOP-এ একটি প্রক্রিয়া যা একটি ক্লাসকে অন্য একটি ক্লাস থেকে প্রোপার্টি এবং মেথড উত্তরাধিকারী করতে দেয়। টাইপস্ক্রিপ্টে `extends` কীওয়ার্ড ব্যবহার করে একটি সাবক্লাস তৈরি করা যায় যা সুপারক্লাস থেকে উত্তরাধিকারী হবে। একটি উদাহরণ নিচে দেওয়া হলো:

```typescript
class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleepTime(numOfHours: number) {
    console.log(`Student will sleep for ${numOfHours} hours.`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
```

এখানে `Person` ক্লাসে তিনটি প্রোপার্টি রয়েছে: `name`, `age`, এবং `address`। `Student` ক্লাসটি `Person` ক্লাসকে `extends` করে এবং এর সমস্ত প্রোপার্টি এবং মেথড উত্তরাধিকারী হয়েছে।

---

### Module-3.3: টাইপ গার্ড `typeof` এবং `in` দিয়ে ব্যবহার:

টাইপ গার্ড টাইপস্ক্রিপ্টে একটি উপায় যা রানটাইমে টাইপ চেকিং সম্পন্ন করে। এটি ভ্যারিয়েবলের টাইপ নির্ধারণ করে নির্দিষ্ট শর্তাবলী অনুযায়ী। এটি `typeof` এবং `in` অপারেটর দিয়ে করা যায়। উদাহরণস্বরূপ:

```typescript
type Alphanumeric = string | number;
function add(a: Alphanumeric, b: Alphanumeric): Alphanumeric {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + " " + b.toString();
  }
}
console.log(add(1, 2)); // 3
console.log(add("Hello", "World")); // HelloWorld
```

`typeof` চেক করে যে প্রপার্টি নির্দিষ্ট টাইপের কি না।

---

### Module-3.4: `instanceof` ব্যবহার করে টাইপ গার্ড:

`instanceof` অপারেটর দিয়ে টাইপ গার্ড করা যায়, যা একটি অবজেক্ট নির্দিষ্ট ক্লাসের ইনস্ট্যান্স কিনা তা পরীক্ষা করে। উদাহরণস্বরূপ:

```typescript
class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`The ${this.name} making sound.`);
  }
}
```

এই উদাহরণে `Animal` ক্লাস সংজ্ঞায়িত করা হয়েছে।

---

### Module-3.5: অ্যাক্সেস মডিফায়ার:

অ্যাক্সেস মডিফায়ার বিভিন্ন অংশের দৃশ্যমানতা এবং অ্যাক্সেস নিয়ন্ত্রণ করতে ব্যবহৃত হয়। টাইপস্ক্রিপ্টে চারটি মডিফায়ার রয়েছে:

- `public`: সমস্ত স্থান থেকে অ্যাক্সেসযোগ্য।
- `private`: কেবলমাত্র ক্লাসের ভেতর থেকে অ্যাক্সেসযোগ্য।
- `protected`: ক্লাস এবং এর সাবক্লাসের ভেতর থেকে অ্যাক্সেসযোগ্য।
- `readonly`: কেবলমাত্র ক্লাসের ভেতর থেকে অ্যাসাইন করা যায়।

```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  addDeposit(amount: number) {
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }
}
```

এখানে `BankAccount` ক্লাসে তিনটি প্রোপার্টি রয়েছে: `id`, `name`, এবং `_balance`। `public` এবং `readonly` চিহ্নিত করা প্রোপার্টিগুলি বাইরে থেকে অ্যাক্সেসযোগ্য।

---

### Module-3.6: গেটার এবং সেটার ইন অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং:

গেটার এবং সেটার হল TypeScript-এ বিশেষ ধরনের মেথড যা প্রোপার্টি অ্যাক্সেস এবং পরিবর্তনের জন্য কাস্টম আচরণ নির্ধারণ করতে ব্যবহৃত হয়। এগুলি ক্লাসে গেটার এবং সেটার প্রয়োগ করতে ব্যবহৃত হয়, যা অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের একটি সাধারণ প্যাটার্ন।  
 নিচে গেটার এবং সেটার ব্যবহারের একটি উদাহরণ দেওয়া হলো:

```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  set Deposit(amount: number) {
    this._balance += amount;
  }
  get Balance() {
    return this._balance;
  }
}
const account = new BankAccount(1234, "John Doe", 1000);
account.Deposit = 500;
console.log(account.Balance); // 1500
```

এই উদাহরণে, `BankAccount` ক্লাসের তিনটি প্রোপার্টি রয়েছে: `id`, `name`, এবং `_balance`। `id` প্রোপার্টিটি `public` এবং `readonly` হিসেবে চিহ্নিত, `name` প্রোপার্টিটি `public` এবং `_balance` প্রোপার্টিটি `protected` হিসেবে চিহ্নিত।  
 `Deposit` প্রোপার্টিটি `protected` এবং `Balance` প্রোপার্টিটি `public` হিসেবে চিহ্নিত। এর মানে হল `Deposit` প্রোপার্টিটি কেবল ক্লাসের ভেতর থেকে সেট করা যাবে, এবং `Balance` প্রোপার্টিটি যেকোনো জায়গা থেকে অ্যাক্সেস করা যাবে।  
 `account` অবজেক্টটি `BankAccount` ক্লাস ব্যবহার করে তৈরি করা হয়েছে, যেখানে `id` 1234, `name` "John Doe" এবং প্রাথমিক ব্যালেন্স 1000 রয়েছে। `Deposit` প্রোপার্টিটি `Deposit` সেটার মেথড ব্যবহার করে 500 সেট করা হয়েছে। `Balance` প্রোপার্টিটি `Balance` গেটার মেথড ব্যবহার করে অ্যাক্সেস করা হয়েছে, যা `_balance` প্রোপার্টির মান রিটার্ন করে।  
 `Deposit` প্রোপার্টিটি `Deposit` সেটার মেথড ব্যবহার করে 500 সেট করা হয়েছে, যা `_balance` প্রোপার্টিতে 500 যোগ করে। `Balance` প্রোপার্টিটি `Balance` গেটার মেথড ব্যবহার করে অ্যাক্সেস করা হয়েছে, যা `_balance` প্রোপার্টির আপডেট করা মান রিটার্ন করে।

---

Here’s an explanation for each of the requested topics, structured similarly to the Module-3.6 example:

---

### Module-3.7: স্ট্যাটিক প্রোপার্টি এবং মেথড ইন অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং

স্ট্যাটিক প্রোপার্টি এবং মেথড ব্যবহার করে একটি ক্লাসের অন্তর্গত প্রোপার্টি বা মেথড সংজ্ঞায়িত করা যায় যা ক্লাসের নির্দিষ্ট কোন ইনস্ট্যান্সের সাথে সম্পর্কিত নয়। অর্থাৎ, এগুলি ক্লাসের সমস্ত ইনস্ট্যান্সের জন্য একটি শেয়ার্ড স্টেট হিসেবে কাজ করে। TypeScript-এ `static` কিওয়ার্ড ব্যবহার করে স্ট্যাটিক প্রোপার্টি এবং মেথড নির্ধারণ করা হয়। নিচে একটি উদাহরণ দেওয়া হলো:

```typescript
class Counter {
  static count: number = 0;
  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
```

এই উদাহরণে, `Counter` ক্লাসে একটি স্ট্যাটিক প্রোপার্টি `count` এবং দুটি স্ট্যাটিক মেথড `increment` এবং `decrement` রয়েছে। `count` প্রোপার্টিটি 0 দিয়ে শুরু করা হয়েছে। `increment` মেথডটি `count` প্রোপার্টিকে 1 বাড়ায় এবং `decrement` মেথডটি `count` প্রোপার্টিকে 1 কমায়। `increment` মেথডটি দুইবার এবং `decrement` মেথডটি একবার কল করা হয়েছে। আউটপুট হবে `1`, `2`, এবং `1`।

স্ট্যাটিক এবং ইনস্ট্যান্স মেথডের মধ্যে পার্থক্য:

- 1.স্ট্যাটিক মেথড ক্লাসের উপর কল করা হয়, ইনস্ট্যান্স মেথড ক্লাসের নির্দিষ্ট একটি ইনস্ট্যান্সের উপর কল করা হয়।**
- 2.স্ট্যাটিক মেথড কেবলমাত্র স্ট্যাটিক প্রোপার্টি ও মেথড অ্যাক্সেস করতে পারে, ইনস্ট্যান্স মেথড কেবল ইনস্ট্যান্স প্রোপার্টি ও মেথড অ্যাক্সেস করতে পারে।
- 3.স্ট্যাটিক মেথড সাধারণত এমন কাজ করে যা ইনস্ট্যান্সের স্টেটের উপর নির্ভর করে না, যেমন: গণনা বা ইউটিলিটি ফাংশন। ইনস্ট্যান্স মেথড নির্দিষ্ট ইনস্ট্যান্সের স্টেট অনুযায়ী কাজ করে।

---

### Module-3.8: পলিমরফিজম ইন অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং

পলিমরফিজম এমন একটি বৈশিষ্ট্য যা একটি অবজেক্টকে বিভিন্ন রূপে কাজ করতে সক্ষম করে। অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ে, পলিমরফিজম ইনহেরিটেন্স এবং মেথড ওভাররাইডিং দ্বারা অর্জিত হয়। নিচের উদাহরণে এটি দেখানো হয়েছে:

```typescript
class Person {
  getSleep() {
    console.log(`The person is sleeping for 8 hours.`);
  }
}
class Student extends Person {
  getSleep() {
    console.log(`The student is sleeping for 7 hours.`);
  }
}
class Developer extends Person {
  getSleep() {
    console.log(`The developer is sleeping for 6 hours.`);
  }
}
const getSleepingHours = (person: Person) => {
  person.getSleep();
};
const person = new Person();
const student = new Student();
const developer = new Developer();
getSleepingHours(person);
getSleepingHours(student);
getSleepingHours(developer);
```

এই উদাহরণে, `Person` ক্লাসের একটি `getSleep` মেথড রয়েছে। `Student` এবং `Developer` ক্লাসগুলি `Person` থেকে ইনহেরিট করেছে এবং `getSleep` মেথডকে ওভাররাইড করেছে। `getSleepingHours` ফাংশনটি প্যারামিটার হিসেবে একটি `Person` অবজেক্ট গ্রহণ করে এবং সেটির `getSleep` মেথড কল করে, যা ভিন্ন ভিন্ন ক্লাস অনুযায়ী আলাদা আউটপুট দেয়।

---

### Module-3.9: অ্যাবস্ট্রাকশন ইন অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং

অ্যাবস্ট্রাকশন হলো সিস্টেমের জটিলতাকে লুকিয়ে, শুধু প্রয়োজনীয় বৈশিষ্ট্যগুলিতে মনোযোগ কেন্দ্রীভূত করার প্রক্রিয়া। নিচে একটি উদাহরণ দেওয়া হলো:

```typescript
interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}
class Car implements Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
  stopEngine(): void {
    console.log("Car engine stopped");
  }
  move(): void {
    console.log("Car moving");
  }
}
const tesla = new Car();
tesla.startEngine();
tesla.stopEngine();
tesla.move();
```

এখানে, `Vehicle` ইন্টারফেসটি একটি গাড়ির মৌলিক কার্যকারিতা সংজ্ঞায়িত করেছে। `Car` ক্লাসটি `Vehicle` ইন্টারফেসটি ইমপ্লিমেন্ট করেছে এবং প্রত্যেকটি মেথডের জন্য একটি বাস্তবায়ন প্রদান করেছে। এই অ্যাবস্ট্রাকশন কনসেপ্টটি কোডকে আরও মডুলার এবং রক্ষণাবেক্ষণযোগ্য করে তোলে।

---

### Module-3.10: এনক্যাপসুলেশন ইন অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং

এনক্যাপসুলেশন একটি সিস্টেমের জটিলতাকে ছোট ছোট অংশে ভাগ করে লুকিয়ে রাখার প্রক্রিয়া। নিচের উদাহরণটি দেখুন:

```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  addDeposit(amount: number) {
    this._balance += amount;
  }
  getBalance() {
    return this._balance;
  }
}
const account = new BankAccount(1234, "John Doe", 1000);
console.log(account.getBalance()); // 1000
account.addDeposit(500);
console.log(account.getBalance()); // 1500
```

এই উদাহরণে, `BankAccount` ক্লাসে `_balance` প্রোপার্টিটি `protected` হিসেবে চিহ্নিত করা হয়েছে, যা এই প্রোপার্টিকে শুধু ক্লাসের মধ্যে ব্যবহৃত হতে দেয়। `addDeposit` মেথডটি `_balance` প্রোপার্টিতে নির্দিষ্ট পরিমাণ যোগ করে এবং `getBalance` মেথডটি `_balance` এর মান ফেরত দেয়। এনক্যাপসুলেশন ব্যবহারে সিস্টেমকে সহজে পরিচালনা ও রক্ষণাবেক্ষণ করা সম্ভব।
----