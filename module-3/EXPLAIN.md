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
