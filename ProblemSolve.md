## TASK 1
এই প্রোগ্রামটি টাইপস্ক্রিপ্টে লেখা হয়েছে এবং একটি সংক্ষিপ্ত ও সহজ "স্বাগত বার্তা" কনসোলে প্রিন্ট করবে। নিচে কোডটি ব্যাখ্যা করা হলো:

```typescript
function greetings() {
  console.log(
    "Hello World, I will complete this course successfully and become a Next level Web Developer!"
  );
}

greetings();
```

### কোডের কার্যপ্রণালি

1. **`greetings()` ফাংশনটি ডিফাইন করা হয়েছে**:

   - এখানে `function` কীওয়ার্ড ব্যবহার করে `greetings` নামে একটি ফাংশন তৈরি করা হয়েছে।
   - এই ফাংশনের কাজ হলো কনসোলে একটি নির্দিষ্ট বার্তা প্রদর্শন করা।

2. **`greetings()` ফাংশনটি কল করা হয়েছে**:

   - `greetings();` লাইনটি ফাংশনটিকে কল (invoke) করে, অর্থাৎ ফাংশনটির ভেতরে থাকা কোডটি চালানো হবে।

3. **`console.log(...)` ফাংশনের মাধ্যমে বার্তা প্রদর্শন**:
   - `greetings` ফাংশনের ভেতরে `console.log` ব্যবহার করে একটি বার্তা কনসোলে প্রিন্ট করা হয়েছে।
   - বার্তাটি হলো:
     ```
     "Hello World, I will complete this course successfully and become a Next level Web Developer!"
     ```
   - ফাংশনটি কল করার মাধ্যমে এই বার্তাটি কনসোলে প্রদর্শিত হবে।

### সংক্ষেপে

এই প্রোগ্রামে প্রথমে একটি ফাংশন ডিফাইন করা হয়েছে, যা কনসোলে একটি বার্তা প্রিন্ট করবে। পরে ফাংশনটি কল করার মাধ্যমে নির্দিষ্ট বার্তাটি কনসোলে প্রদর্শিত হবে।

---

## TASK 2

এই কোডটি টাইপস্ক্রিপ্টে লেখা হয়েছে এবং এটি একটি ফাংশন `greet` ব্যবহার করে কনসোলে স্বাগত বার্তা প্রদর্শন করে। এখানে কোডের ধাপে ধাপে কাজগুলো বাংলায় ব্যাখ্যা করা হলো:

```typescript
function greet(name: string, age: number, role?: "admin" | "user" | "guest") {
  console.log(`Hello, ${name}. You are ${age} years old and ${role}`);
}

greet("John", 25, "admin");
greet("Shakil", 25);
greet("Angel Smith", 25, "user");
```

### কোডের কার্যপ্রণালি

1. **`greet()` ফাংশনটি ডিফাইন করা হয়েছে**:

   - এখানে `greet` নামে একটি ফাংশন তৈরি করা হয়েছে। এটি তিনটি প্যারামিটার গ্রহণ করে:
     - `name`: একটি `string` টাইপের প্যারামিটার, যা ব্যক্তির নাম নির্দেশ করে।
     - `age`: একটি `number` টাইপের প্যারামিটার, যা ব্যক্তির বয়স নির্দেশ করে।
     - `role`: একটি `optional` প্যারামিটার যার টাইপ `'admin' | 'user' | 'guest'`, অর্থাৎ এটি তিনটি নির্দিষ্ট মানের (লিটারাল টাইপ) যেকোনো একটি হতে পারে।
   - `role` প্যারামিটারটি `optional`, অর্থাৎ এটি দেওয়া না হলেও কোডটি কাজ করবে।

2. **`greet()` ফাংশনটি বিভিন্ন আর্গুমেন্ট সহ কল করা হয়েছে**:

   - প্রথমবার `greet("John", 25, "admin");` ফাংশনটি কল করা হয়েছে, যেখানে `name` হলো `"John"`, `age` হলো `25`, এবং `role` হলো `"admin"`।
   - দ্বিতীয়বার `greet("Shakil", 25);` ফাংশনটি কল করা হয়েছে, যেখানে `role` প্যারামিটারটি দেওয়া হয়নি।
   - তৃতীয়বার `greet("Angel Smith", 25, "user");` ফাংশনটি কল করা হয়েছে, যেখানে `role` হলো `"user"`।

3. **ফাংশনটি কনসোলে বার্তা প্রদর্শন করে**:
   - `console.log` এর মাধ্যমে বার্তা প্রদর্শিত হয়। যেমন:
     - `"Hello, John. You are 25 years old and admin"`
     - `"Hello, Shakil. You are 25 years old and undefined"` (কারণ `role` দেওয়া হয়নি)
     - `"Hello, Angel Smith. You are 25 years old and user"`

### আউটপুট

প্রোগ্রামটি চালানোর পর কনসোলে নিচের বার্তাগুলি দেখা যাবে:

```
Hello, John. You are 25 years old and admin
Hello, Shakil. You are 25 years old and undefined
Hello, Angel Smith. You are 25 years old and user
```

### সারসংক্ষেপ

এই প্রোগ্রামে, `greet` ফাংশনটি নাম, বয়স, এবং (ঐচ্ছিক) ভূমিকা প্রিন্ট করে। যদি `role` দেওয়া না হয়, তবে এটি `undefined` দেখাবে।

---

## TASK 3

এই কোডটি টাইপস্ক্রিপ্টে একটি `Person` টাইপের অবজেক্ট তৈরি এবং কনসোলে প্রিন্ট করার জন্য লেখা হয়েছে। নিচে কোডের কাজগুলো ব্যাখ্যা করা হলো:

```typescript
type Person = {
  name: string;
  address: {
    city: string;
    state: string;
  };
  hairColor: "black" | "brown" | "blonde" | "red" | "blue" | "green";
  eyeColor: "brown" | "blue" | "green" | "hazel";
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: "single" | "married" | "divorced";
  friends: string[];
};
```

1. **`type Person`**:

   - এখানে `Person` নামে একটি টাইপ তৈরি করা হয়েছে, যা একটি নির্দিষ্ট গঠন অনুযায়ী ডেটা ধারণ করবে। এতে বিভিন্ন প্রপার্টি রয়েছে, যেমন নাম, ঠিকানা, চুল ও চোখের রঙ, আয়-ব্যয়, শখ, পরিবার, চাকরি, দক্ষতা, বৈবাহিক অবস্থা এবং বন্ধুদের তালিকা।

2. **`const person: Person = { ... }`**:

   - `person` নামে একটি কনস্ট্যান্ট ভ্যারিয়েবল তৈরি করা হয়েছে, যার টাইপ `Person`। এটি `Person` টাইপের গঠন অনুযায়ী ডেটা ধারণ করছে।

3. **কনসোলে প্রিন্ট**:
   - `console.log(person);` লাইনের মাধ্যমে `person` অবজেক্টটি কনসোলে প্রিন্ট হবে।

### আউটপুট:

এই কোডটি চালালে `person` অবজেক্টের সমস্ত তথ্য কনসোলে দেখা যাবে, যেমন:

```plaintext
{
  name: "John",
  address: { city: "New York", state: "NY" },
  hairColor: "brown",
  eyeColor: "brown",
  income: 10000,
  expense: 1000,
  hobbies: ["reading", "hiking", "traveling"],
  familyMembers: ["John", "Mary", "Tom"],
  job: "Software Engineer",
  skills: ["JavaScript", "React", "Node.js"],
  maritalStatus: "married",
  friends: ["Angel", "Shakil", "John"]
}
```

এইভাবে `Person` টাইপটি ব্যবহার করে একটি অবজেক্টের গঠন নির্ধারণ করে রাখা যায়, যা টাইপস্ক্রিপ্টে ডেটার স্থিরতা এবং নির্ভুলতা বজায় রাখে।

---

## TASK 4

এই কোডটি টাইপস্ক্রিপ্টে দুটি ইন্টারফেস ব্যবহার করে **ইউনিয়ন** এবং **ইন্টারসেকশন** টাইপ তৈরি করে। নিচে কোডের কাজগুলো ব্যাখ্যা করা হলো:

```typescript
interface Book {
  title: string;
  author: string;
  year: number;
}

interface Magazine {
  title: string;
  author: string;
  issue: number;
}
```

1. **`interface Book`** এবং **`interface Magazine`**:
   - এখানে `Book` এবং `Magazine` নামে দুটি ইন্টারফেস তৈরি করা হয়েছে। `Book` ইন্টারফেসে `title`, `author`, এবং `year` প্রপার্টি রয়েছে। `Magazine` ইন্টারফেসে `title`, `author`, এবং `issue` প্রপার্টি রয়েছে।

```typescript
type BookAndMagazine = Book & Magazine;
type BookOrMagazine = Book | Magazine;
```

2. **`type BookAndMagazine`** এবং **`type BookOrMagazine`**:
   - `BookAndMagazine` টাইপটি **ইন্টারসেকশন টাইপ** হিসাবে `Book` এবং `Magazine` ইন্টারফেসের সমস্ত প্রপার্টি ধারণ করে, মানে এটি উভয় ইন্টারফেসের প্রপার্টি একসাথে রাখতে সক্ষম।
   - `BookOrMagazine` টাইপটি **ইউনিয়ন টাইপ**, অর্থাৎ এটি `Book` অথবা `Magazine` যেকোনো একটি ইন্টারফেসের প্রপার্টি ধারণ করতে পারে।

```typescript
const bookAndMagazine: BookAndMagazine = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  issue: 1,
};
```

3. **`bookAndMagazine`**:
   - `BookAndMagazine` টাইপ ব্যবহার করে `bookAndMagazine` নামক একটি ভ্যারিয়েবল তৈরি করা হয়েছে, যা `title`, `author`, `year`, এবং `issue` প্রপার্টি ধারণ করে।

```typescript
const bookOrMagazine: BookOrMagazine = {
  title: "National Bird",
  author: "National Geographic",
  year: 1925,
  issue: 1,
};
```

4. **`bookOrMagazine`**:

   - `BookOrMagazine` টাইপ ব্যবহার করে `bookOrMagazine` নামক একটি ভ্যারিয়েবল তৈরি করা হয়েছে। এটি `Book` বা `Magazine` যেকোনো একটি ইন্টারফেসের গঠন মেনে ডেটা ধারণ করতে পারে।

5. **কনসোলে আউটপুট**:
   - `console.log(bookAndMagazine);` এবং `console.log(bookOrMagazine);` কমান্ডের মাধ্যমে `bookAndMagazine` এবং `bookOrMagazine` ভ্যারিয়েবলগুলো কনসোলে প্রিন্ট করা হয়েছে।

### আউটপুট

কনসোলে `bookAndMagazine` এবং `bookOrMagazine` অবজেক্টের তথ্যগুলো দেখা যাবে, যেমন:

```plaintext
{
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  issue: 1
}
{
  title: "National Bird",
  author: "National Geographic",
  year: 1925,
  issue: 1
}
```

এইভাবে টাইপস্ক্রিপ্টে ইন্টারফেসগুলো থেকে ইউনিয়ন এবং ইন্টারসেকশন টাইপ তৈরি করে অবজেক্ট গঠনের নিয়ম নির্ধারণ করা যায়।

---

## TASK 5

এই কোডটি একটি ফাংশন তৈরি করে যা একটি স্ট্রিংকে উল্টো করে প্রিন্ট করে। নিচে কোডের কাজগুলো ব্যাখ্যা করা হলো:

```typescript
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
```

1. **`function reverseString(str: string): string`**:

   - এখানে `reverseString` নামে একটি ফাংশন তৈরি করা হয়েছে, যা একটি `string` টাইপের প্যারামিটার `str` নেয় এবং একটি `string` টাইপের ভ্যালু রিটার্ন করে।
   - ফাংশনটি `str.split("").reverse().join("")` লজিক ব্যবহার করে স্ট্রিং উল্টো করে।

2. **`str.split("")`**:

   - `split("")` মেথডটি স্ট্রিংটিকে প্রতিটি অক্ষর আলাদা করে একটি অ্যারেতে পরিণত করে। উদাহরণস্বরূপ, `"hello"` স্ট্রিংটিকে `["h", "e", "l", "l", "o"]` হিসেবে বিভক্ত করে।

3. **`reverse()`**:

   - `reverse()` মেথডটি অ্যারের সব উপাদান উল্টো করে। উদাহরণস্বরূপ, `["h", "e", "l", "l", "o"]` উল্টো করলে এটি `["o", "l", "l", "e", "h"]` হয়।

4. **`join("")`**:
   - `join("")` মেথডটি উল্টো করা অ্যারের উপাদানগুলোকে আবার একটি স্ট্রিংয়ে পরিণত করে। এতে `"olleh"` স্ট্রিংটি তৈরি হয়।

```typescript
console.log(reverseString("hello")); // olleh
console.log(reverseString("Next Level Web Dev")); // veD beW leveL txeN
```

5. **`console.log(reverseString("hello"));`** এবং **`console.log(reverseString("Next Level Web Dev"));`**:
   - `reverseString("hello")` এবং `reverseString("Next Level Web Dev")` ফাংশন কল করে স্ট্রিংগুলোর উল্টো ফলাফল কনসোলে প্রদর্শন করে।

### আউটপুট

কনসোলে নিচের আউটপুটটি দেখা যাবে:

```plaintext
olleh
veD beW leveL txeN
```

**সারসংক্ষেপে**, এই প্রোগ্রামটি `split`, `reverse`, এবং `join` মেথডগুলো ব্যবহার করে একটি স্ট্রিংকে উল্টো করে কনসোলে প্রিন্ট করে।

---

## TASK 6

এই কোডটি একটি ফাংশন তৈরি করে যা একাধিক সংখ্যাসূচক আর্গুমেন্ট নিয়ে তাদের যোগফল রিটার্ন করে। নিচে কোডের ব্যাখ্যা দেওয়া হলো:

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr);
}
```

1. **`function sum(...numbers: number[]): number`**:

   - এখানে `sum` নামে একটি ফাংশন তৈরি করা হয়েছে, যা একাধিক সংখ্যাসূচক আর্গুমেন্ট গ্রহণ করতে পারে।
   - `...numbers: number[]` এর মাধ্যমে আমরা `rest` অপারেটর ব্যবহার করেছি, যা যেকোনো সংখ্যক আর্গুমেন্টকে একটি অ্যারেতে পরিণত করে `numbers` নামে ধরে রাখে।
   - ফাংশনটি `number` টাইপের একটি ভ্যালু রিটার্ন করে।

2. **`numbers.reduce((acc, curr) => acc + curr)`**:
   - `reduce` মেথডটি ব্যবহার করে আমরা `numbers` অ্যারের প্রতিটি উপাদান যোগ করি।
   - এখানে `acc` (accumulator) শুরুতে `0` থাকে এবং প্রতিটি উপাদান `curr` হিসাবে ধরে, `acc + curr` যোগ করে নতুন `acc` তৈরি করে।

```typescript
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
```

3. **`console.log(sum(1, 2, 3, 4, 5));`** এবং **`console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));`**:
   - প্রথম কল `sum(1, 2, 3, 4, 5)` ফাংশনটিকে ১ থেকে ৫ পর্যন্ত সংখ্যাগুলোর যোগফল বের করতে বলে। ফলাফল: `15`।
   - দ্বিতীয় কল `sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)` ফাংশনটিকে ১ থেকে ১০ পর্যন্ত সংখ্যাগুলোর যোগফল বের করতে বলে। ফলাফল: `55`।

### আউটপুট

কনসোলে নিচের আউটপুট দেখা যাবে:

```plaintext
15
55
```

**সারসংক্ষেপে**, এই প্রোগ্রামটি `rest` অপারেটরের মাধ্যমে একাধিক সংখ্যাসূচক আর্গুমেন্ট নিয়ে তাদের যোগফল বের করে এবং তা কনসোলে প্রিন্ট করে।

---

## TASK 7

এই কোডটি একটি ফাংশন তৈরি করে যা ইনপুটের টাইপ অনুযায়ী আলাদা আচরণ করে। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
function getLength(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input * input;
  }
}
```

1. **`function getLength(input: string | number): number`**:

   - এখানে `getLength` নামে একটি ফাংশন তৈরি করা হয়েছে, যা একটি প্যারামিটার গ্রহণ করে যার টাইপ `string` অথবা `number` হতে পারে।
   - ফাংশনটি একটি `number` টাইপের মান রিটার্ন করে।

2. **`if (typeof input === "string")`**:

   - এই শর্তটি চেক করে যে ইনপুটটি যদি `string` হয়, তাহলে:
     - `return input.length;`: এটি ইনপুটের দৈর্ঘ্য রিটার্ন করে।

3. **`else`**:
   - যদি ইনপুটটি `string` না হয় (অর্থাৎ `number` হয়), তখন:
     - `return input * input;`: এটি ইনপুটের বর্গ রিটার্ন করে।

```typescript
const strLength = getLength("Next Level Web Dev");
const numSquare = getLength(25);
```

4. **`const strLength = getLength("Next Level Web Dev");`**:

   - এই কলটি `getLength` ফাংশনটিকে `"Next Level Web Dev"` ইনপুট দিয়ে কল করে, যেহেতু এটি একটি স্ট্রিং, তাই ফাংশনটি স্ট্রিংটির দৈর্ঘ্য (১৮, স্পেস সহ) রিটার্ন করে।

5. **`const numSquare = getLength(25);`**:
   - এই কলটি `getLength` ফাংশনটিকে `25` ইনপুট দিয়ে কল করে, যেহেতু এটি একটি সংখ্যা, তাই ফাংশনটি `25` এর বর্গ (৬২৫) রিটার্ন করে।

### আউটপুট

কনসোলে নিচের আউটপুট দেখা যাবে:

```plaintext
18
625
```

**সারসংক্ষেপে**, এই প্রোগ্রামটি ইনপুটের টাইপ অনুযায়ী আলাদা ফলাফল প্রদান করে: স্ট্রিং হলে দৈর্ঘ্য এবং সংখ্যা হলে বর্গ।

---

## TASK 8

এই কোডটি একটি `AdminUser` টাইপ তৈরি করে যা `User` এবং `Admin` ইন্টারফেসের সংযোগ। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  adminLevel: number;
}

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
  return `Hello ${user.name}, your admin level is ${user.adminLevel}`;
}
```

1. **`interface User`**:

   - এখানে একটি `User` ইন্টারফেস সংজ্ঞায়িত করা হয়েছে, যার মধ্যে দুটি প্রোপার্টি আছে: `name` (স্ট্রিং টাইপ) এবং `email` (স্ট্রিং টাইপ)।

2. **`interface Admin`**:

   - এখানে একটি `Admin` ইন্টারফেস সংজ্ঞায়িত করা হয়েছে, যার মধ্যে একটি প্রোপার্টি আছে: `adminLevel` (নাম্বার টাইপ)।

3. **`type AdminUser = User & Admin`**:

   - এখানে `AdminUser` নামের একটি টাইপ তৈরি করা হয়েছে যা `User` এবং `Admin` ইন্টারফেসের সংযোগ (intersection) নির্দেশ করে। অর্থাৎ, `AdminUser` টাইপটি `User` এর সব প্রোপার্টি এবং `Admin` এর সব প্রোপার্টি ধারণ করবে।

4. **`function describeAdmin(user: AdminUser)`**:
   - এখানে `describeAdmin` নামে একটি ফাংশন তৈরি করা হয়েছে, যা একটি `AdminUser` টাইপের প্যারামিটার গ্রহণ করে।
   - ফাংশনটি একটি স্ট্রিং রিটার্ন করে, যেখানে ব্যবহারকারীর নাম এবং প্রশাসনিক স্তরের তথ্য অন্তর্ভুক্ত থাকে।

```typescript
describeAdmin({
  name: "John",
  email: "john@gmail.com",
  adminLevel: 10,
}); // Hello John, your admin level is 10
```

5. **`describeAdmin({...})`**:
   - ফাংশনটি একটি অবজেক্ট প্যারামিটার দিয়ে কল করা হয়েছে, যেখানে `name`, `email`, এবং `adminLevel` প্রোপার্টিগুলি প্রদান করা হয়েছে। এই অবজেক্টটি `AdminUser` টাইপের সাথে মিল খায়।
   - ফাংশনটি `Hello John, your admin level is 10` এই স্ট্রিংটি রিটার্ন করে।

### সারসংক্ষেপ:

এই প্রোগ্রামটি একটি প্রশাসক ব্যবহারকারী (AdminUser) সংজ্ঞায়িত করে এবং একটি ফাংশনের মাধ্যমে তার বিবরণ প্রদান করে। এটি দেখায় কিভাবে intersection types ব্যবহার করে নতুন টাইপ তৈরি করা যায় এবং ফাংশনে সেই টাইপের অবজেক্টকে পাস করা যায়।

---

## TASK 9

এই কোডটি একটি `getEmployeeCity` নামের ফাংশন তৈরি করে যা একটি নিযুক্ত ব্যক্তি (Employee) এর শহর নামটি নিরাপদভাবে বের করতে পারে। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
interface Employee {
  name: string;
  address: {
    city: string;
  };
}

function getEmployeeCity(employee: Employee): string {
  return employee?.address?.city;
}
```

1. **`interface Employee`**:

   - এখানে একটি `Employee` ইন্টারফেস সংজ্ঞায়িত করা হয়েছে, যার মধ্যে `name` (স্ট্রিং টাইপ) এবং `address` (যার মধ্যে `city` প্রোপার্টি আছে, স্ট্রিং টাইপ) প্রোপার্টি রয়েছে।

2. **`function getEmployeeCity(employee: Employee)`**:
   - এখানে `getEmployeeCity` নামের একটি ফাংশন তৈরি করা হয়েছে যা একটি `Employee` টাইপের প্যারামিটার গ্রহণ করে।
   - ফাংশনটি `employee?.address?.city` ব্যবহার করে শহরটি বের করে।
   - `?.` অপারেটরটি (অপশনাল চেইনিং) ব্যবহার করা হয়েছে, যা নিশ্চিত করে যে, যদি `employee` বা `address` বিদ্যমান না থাকে, তাহলে এটি `undefined` ফেরত দেবে, ফলে প্রোগ্রাম ক্র্যাশ হবে না।

```typescript
console.log(getEmployeeCity({ name: "John", address: { city: "New York" } })); // New York
// console.log(getEmployeeCity({ name: "John" })); // undefined
```

3. **`getEmployeeCity({...})`**:
   - ফাংশনটি `{ name: "John", address: { city: "New York" } }` অবজেক্ট প্যারামিটার সহ কল করা হয়েছে। এতে `city` এর মান `New York`, তাই ফাংশনটি `New York` ফেরত দেবে।
   - যদি ফাংশনটি `{ name: "John" }` প্যারামিটার নিয়ে কল করা হয়, তাহলে `address` অনুপস্থিত হবে। এর ফলে `employee?.address?.city` `undefined` ফেরত দেবে।

### সারসংক্ষেপ:

এই কোডটি দেখায় কিভাবে একটি ফাংশন ব্যবহার করে একটি nested object থেকে নিরাপদভাবে মান বের করা যায়। অপশনাল চেইনিং ব্যবহারের ফলে এটি নিশ্চিত করে যে, যদি কোনো স্তরে অবজেক্টটি বিদ্যমান না থাকে, তবে এটি ক্র্যাশ হবে না এবং `undefined` ফেরত দেবে।

---

## TASK 10

এই কোডটি একটি `getDisplayName` নামের ফাংশন তৈরি করে যা একটি নামের মান নিয়ে কাজ করে এবং যদি নামটি `null` বা `undefined` হয়, তবে `"Anonymous"` ফেরত দেয়। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
function getDisplayName(name: string | null | undefined): string {
  return name ?? "Anonymous";
}
```

1. **`function getDisplayName(name: string | null | undefined)`**:

   - এখানে `getDisplayName` নামের একটি ফাংশন সংজ্ঞায়িত করা হয়েছে যা একটি প্যারামিটার গ্রহণ করে। এই প্যারামিটারটির টাইপ `string | null | undefined`, অর্থাৎ এটি একটি স্ট্রিং, অথবা `null`, অথবা `undefined` হতে পারে।

2. **`return name ?? "Anonymous"`**:
   - ফাংশনটি `name` এর মান ফেরত দেয় যদি এটি `null` বা `undefined` না হয়; অন্যথায় `"Anonymous"` ফেরত দেয়।
   - `??` অপারেটরটি (nullish coalescing) ব্যবহৃত হয়েছে, যা নিশ্চিত করে যে `name` যদি `null` বা `undefined` হয়, তাহলে `"Anonymous"` ফেরত দেওয়া হবে।

```typescript
console.log(getDisplayName("John")); // John
console.log(getDisplayName(null)); // Anonymous
console.log(getDisplayName(undefined)); // Anonymous
```

3. **`getDisplayName("John")`**:

   - ফাংশনটি `"John"` প্যারামিটার সহ কল করা হয়েছে। যেহেতু এটি `null` বা `undefined` নয়, তাই এটি `"John"` ফেরত দেবে।

4. **`getDisplayName(null)`**:

   - ফাংশনটি `null` প্যারামিটার নিয়ে কল করা হয়েছে। যেহেতু এটি `null`, তাই ফাংশনটি `"Anonymous"` ফেরত দেবে।

5. **`getDisplayName(undefined)`**:
   - ফাংশনটি `undefined` প্যারামিটার নিয়ে কল করা হয়েছে। যেহেতু এটি `undefined`, তাই ফাংশনটি `"Anonymous"` ফেরত দেবে।

### সারসংক্ষেপ:

এই কোডটি `null` এবং `undefined` মানগুলির ব্যবস্থাপনা প্রদর্শন করে। `??` অপারেটরটি ব্যবহার করে ফাংশনটি নিশ্চিত করে যে, যদি নামের মানটি `null` বা `undefined` হয়, তাহলে `"Anonymous"` ফেরত দেওয়া হবে, অন্যথায় নামটি ফেরত দেওয়া হবে।

---

## TASK 11

এই কোডটি একটি `processData` নামের ফাংশন তৈরি করে যা বিভিন্ন ধরনের ইনপুট মানকে পরিচালনা করে। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
function processData(data: unknown): string | number {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return data * data;
  }
}
```

1. **`function processData(data: unknown)`**:

   - এখানে `processData` নামের একটি ফাংশন সংজ্ঞায়িত করা হয়েছে যা একটি প্যারামিটার গ্রহণ করে যার টাইপ `unknown`। `unknown` টাইপটি নির্দেশ করে যে `data` যে কোনো ধরনের হতে পারে এবং এটি নিরাপদে পরীক্ষা করতে হবে।

2. **`if (typeof data === "string")`**:

   - ফাংশনটি প্রথমে পরীক্ষা করে যে `data` যদি একটি স্ট্রিং হয়। যদি হ্যাঁ হয়, তবে এটি `data.toUpperCase()` ব্যবহার করে স্ট্রিংটির বড় অক্ষরে রূপান্তরিত সংস্করণ ফেরত দেয়।

3. **`else { return data * data; }`**:
   - যদি `data` স্ট্রিং না হয়, তাহলে এটি অনুমান করে যে `data` একটি সংখ্যা। এর পরে, `data * data` ব্যবহার করে সংখ্যাটির বর্গফল ফেরত দেয়।

```typescript
const str = processData("Next Level Web Dev");
const num = processData(25);

console.log(str); // NEXT LEVEL WEB DEV
console.log(num); // 625
```

4. **`const str = processData("Next Level Web Dev")`**:

   - ফাংশনটি `"Next Level Web Dev"` প্যারামিটার সহ কল করা হয়েছে। যেহেতু এটি একটি স্ট্রিং, তাই ফাংশনটি তার বড় অক্ষরে রূপান্তরিত সংস্করণ, `"NEXT LEVEL WEB DEV"` ফেরত দেবে।

5. **`const num = processData(25)`**:

   - ফাংশনটি `25` প্যারামিটার নিয়ে কল করা হয়েছে। যেহেতু এটি একটি সংখ্যা, তাই ফাংশনটি `25 * 25` (অর্থাৎ `625`) ফেরত দেবে।

6. **`console.log(str)`**:

   - পরিবর্তনশীল `str`-এর মান, যা `"NEXT LEVEL WEB DEV"`, কনসোলে লগ করা হবে।

7. **`console.log(num)`**:
   - পরিবর্তনশীল `num`-এর মান, যা `625`, কনসোলে লগ করা হবে।

### সারসংক্ষেপ:

এই কোডটি `unknown` টাইপ ব্যবহার করে ভিন্ন ভিন্ন ধরনের ইনপুট মানকে নিরাপদে পরিচালনা করে। ফাংশনটি চেক করে ইনপুট স্ট্রিং হলে তার বড় অক্ষরে রূপান্তরিত সংস্করণ ফেরত দেয় এবং ইনপুট সংখ্যা হলে তার বর্গফল ফেরত দেয়।

---

## TASK 12

এই কোডটি `handleError` নামের একটি ফাংশন তৈরি করে, যা একটি ত্রুটি পরিচালনা করার জন্য ব্যবহৃত হয়। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
function handleError(message: string): never {
  throw new Error(message);
}
```

1. **`function handleError(message: string): never`**:

   - এখানে `handleError` নামের একটি ফাংশন সংজ্ঞায়িত করা হয়েছে যা একটি প্যারামিটার গ্রহণ করে যার টাইপ `string`। `never` টাইপটি নির্দেশ করে যে এই ফাংশনটি কখনোই সফলভাবে ফেরত ফিরে আসে না; এটি নিশ্চিত করে যে ফাংশনটি ব্যতিক্রম ঘটায় বা কখনো শেষ হয় না।

2. **`throw new Error(message)`**:
   - ফাংশনটি `throw` কিওয়ার্ড ব্যবহার করে একটি নতুন ত্রুটি (Error) তৈরি করে এবং সেই ত্রুটির সঙ্গে দেওয়া `message` প্যারামিটারটি যুক্ত করে। এর ফলে ফাংশনটি একদম শেষ হয়ে যায় এবং একটি ত্রুটি ফেলে দেয়।

```typescript
handleError("Something went wrong");
```

3. **`handleError("Something went wrong")`**:
   - ফাংশনটি `"Something went wrong"` প্যারামিটার নিয়ে কল করা হয়েছে। এই কলটি ফাংশনের মধ্যে ত্রুটি তৈরি করবে এবং এর ফলে ফাংশনটি শেষ হবে। এটি কনসোলে ত্রুটির বার্তা দেখাবে।

### সারসংক্ষেপ:

এই কোডটি `never` টাইপ ব্যবহার করে একটি ফাংশন তৈরি করে যা একটি ত্রুটি সৃষ্টি করে। এটি দেখায় যে `handleError` ফাংশনটি কখনোই সফলভাবে ফেরত আসে না, কারণ এটি একটি ত্রুটি ঘটায়। যখন এই ফাংশনটি কল করা হয়, তখন এটি একটি ত্রুটি ফেলে দেয় এবং প্রোগ্রামটি চলতে থাকলে ত্রুটির বার্তা কনসোলে প্রদর্শিত হয়।

---

## TASK 13

এই কোডটি একটি জেনেরিক ফাংশন `removeDuplicates` তৈরি করে যা একটি অ্যারে থেকে ডুপ্লিকেট মানগুলি সরিয়ে দেয়। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

1. **`function removeDuplicates<T>(arr: T[]): T[]`**:

   - এখানে `removeDuplicates` নামের একটি জেনেরিক ফাংশন সংজ্ঞায়িত করা হয়েছে, যেখানে `T` একটি জেনেরিক টাইপ প্যারামিটার। এই ফাংশনটি একটি অ্যারে `arr` গ্রহণ করে যা যেকোনো টাইপের হতে পারে (যেহেতু `T` ব্যবহার করা হয়েছে)। ফাংশনটি একটি নতুন অ্যারে ফেরত দেয় যা সেই একই টাইপের হবে।

2. **`return [...new Set(arr)]`**:
   - এখানে `Set` কনস্ট্রাক্টর ব্যবহার করা হয়েছে যা একটি ইউনিক (অদ্বিতীয়) মানের সেট তৈরি করে। যখন `arr` কে `Set` এ রূপান্তর করা হয়, তখন এটি স্বয়ংক্রিয়ভাবে ডুপ্লিকেট মানগুলো বাদ দেয়। এরপর, `...` (স্প্রেড অপারেটর) ব্যবহার করে সেট থেকে একটি নতুন অ্যারে তৈরি করা হচ্ছে। ফলে, ডুপ্লিকেট মানগুলো বাদ দেওয়া নতুন অ্যারে ফিরে আসে।

```typescript
const arr1 = [1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9, 10];
const arr2 = ["Next Level Web Dev", "Next Level Web Dev", "Next Level Web Dev"];
```

3. **`const arr1` এবং `const arr2`**:
   - এখানে দুটি অ্যারে তৈরি করা হয়েছে। `arr1` একটি সংখ্যার অ্যারে এবং `arr2` একটি স্ট্রিংয়ের অ্যারে, উভয়েই ডুপ্লিকেট মান রয়েছে।

```typescript
console.log(removeDuplicates(arr1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeDuplicates(arr2)); // ["Next Level Web Dev"]
```

4. **`console.log(removeDuplicates(arr1))` এবং `console.log(removeDuplicates(arr2))`**:
   - প্রথমে `removeDuplicates` ফাংশনটি `arr1` দিয়ে কল করা হয়েছে, যা ডুপ্লিকেট সংখ্যা সরিয়ে নতুন অ্যারে `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` ফেরত দেয়।
   - পরবর্তী কলটি `arr2` দিয়ে করা হয়েছে, যা ডুপ্লিকেট স্ট্রিং সরিয়ে একটি নতুন অ্যারে `["Next Level Web Dev"]` ফেরত দেয়।

### সারসংক্ষেপ:

এই কোডটি একটি জেনেরিক ফাংশন তৈরি করে যা যেকোনো টাইপের অ্যারে গ্রহণ করে এবং সেটের মাধ্যমে ডুপ্লিকেট মানগুলি সরিয়ে একটি নতুন অ্যারে ফেরত দেয়। এটি সংখ্যার অ্যারে এবং স্ট্রিংয়ের অ্যারে উভয়ের জন্য কাজ করে।

---

## TASK 14

এই কোডটি TypeScript ব্যবহার করে একটি অ্যাসিঙ্ক্রোনাস ফাংশন তৈরি করে যা ব্যবহারকারীর তথ্য ফেচ করার একটি সিমুলেশন তৈরি করে। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
async function fetchUserData(): Promise<{ name: string; age: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John", age: 25 });
    }, 1000);
  });
}
```

1. **`async function fetchUserData()`**:

   - এখানে `fetchUserData` নামের একটি অ্যাসিঙ্ক্রোনাস ফাংশন সংজ্ঞায়িত করা হয়েছে। `async` কীওয়ার্ড ফাংশনটিকে অ্যাসিঙ্ক্রোনাস করে, যা ব্যবহৃত হলে ফাংশনটি একটি `Promise` ফেরত দেয়।

2. **`Promise<{ name: string; age: number }>`**:

   - ফাংশনটি একটি `Promise` ফেরত দেয়, যা একটি অবজেক্ট ধারণ করে। এই অবজেক্টের দুটি প্রোপার্টি আছে: `name` (স্ট্রিং টাইপ) এবং `age` (নম্বর টাইপ)।

3. **`new Promise((resolve) => {...})`**:

   - এখানে একটি নতুন `Promise` তৈরি করা হচ্ছে। `resolve` হলো একটি ফাংশন যা `Promise` সফল হলে কল করা হবে।

4. **`setTimeout(() => {...}, 1000)`**:
   - `setTimeout` ব্যবহার করে 1000 মিলিসেকেন্ড (1 সেকেন্ড) পর একটি কার্যকলাপ নির্ধারণ করা হয়েছে। এই সময় পরে, `resolve` ফাংশনটিকে কল করা হবে, যা `name` এবং `age` সহ একটি অবজেক্ট ফেরত দেবে: `{ name: "John", age: 25 }`।

```typescript
fetchUserData().then((user) => {
  console.log(user);
});
```

5. **`fetchUserData().then((user) => {...})`**:

   - `fetchUserData` ফাংশনটি কল করা হয়েছে এবং এটি একটি `Promise` ফেরত দেয়। `then` মেথডটি ব্যবহার করে `Promise` সফল হলে (অর্থাৎ, ব্যবহারকারীর তথ্য পাওয়া গেলে) একটি ফাংশন চলবে, যেখানে `user` প্যারামিটার হিসেবে ফেচ করা ডেটা গ্রহণ করবে।

6. **`console.log(user)`**:
   - `user` এর মানটি কনসোলে লগ করা হবে। এটি 1 সেকেন্ড পর `{ name: "John", age: 25 }` আউটপুট দেবে।

### সারসংক্ষেপ:

এই কোডটি একটি অ্যাসিঙ্ক্রোনাস ফাংশন তৈরি করে যা 1 সেকেন্ড পর একটি ব্যবহারকারীর তথ্য ফেচ করে এবং সাফল্যের সাথে ডেটা পাওয়া গেলে সেটি কনসোলে লগ করে। এটি বাস্তবিক সময়ে ডেটা ফেচ করার জন্য সাধারণত ব্যবহৃত প্যাটার্নের একটি উদাহরণ।

---

## TASK 15

এই কোডটি TypeScript ব্যবহার করে কাস্টম টাইপ গার্ড তৈরি করার একটি উদাহরণ, যা আরও নির্ভুল টাইপ চেকিং নিশ্চিত করে। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

1. **`function isString(value: unknown)`**:

   - এখানে `isString` নামের একটি ফাংশন সংজ্ঞায়িত করা হয়েছে, যা `unknown` টাইপের একটি প্যারামিটার গ্রহণ করে। `unknown` টাইপটি যে কোনো ধরনের মান হতে পারে।

2. **`value is string`**:

   - এই অংশটি টাইপ গার্ড হিসেবে কাজ করে। এটি নির্দেশ করে যে, যদি ফাংশনটি সত্য (true) ফেরত দেয়, তাহলে `value` টাইপটি `string` হবে।

3. **`return typeof value === "string"`**:
   - ফাংশনটি চেক করে যে `value` স্ট্রিং টাইপের কিনা। যদি হ্যাঁ, তবে `true` ফেরত দেয়, নাহলে `false` ফেরত দেয়।

```typescript
function printUpperCase(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}
```

4. **`function printUpperCase(value: unknown)`**:

   - এখানে `printUpperCase` নামের একটি ফাংশন সংজ্ঞায়িত করা হয়েছে, যা আবারও `unknown` টাইপের একটি প্যারামিটার গ্রহণ করে।

5. **`if (isString(value))`**:

   - এই অংশে `isString` ফাংশনটি কল করা হয়েছে যাতে চেক করা যায় যে `value` একটি স্ট্রিং কিনা। যদি সত্যি হয়, তাহলে ব্লকটি কার্যকর হবে।

6. **`console.log(value.toUpperCase())`**:
   - যদি `value` স্ট্রিং হয়, তাহলে এটি `toUpperCase()` মেথড ব্যবহার করে `value` কে বড় হাতের অক্ষরে রূপান্তর করে কনসোলে লগ করে।

```typescript
printUpperCase("Next Level Web Dev"); // NEXT LEVEL WEB DEV
printUpperCase(25); // N.B: This will not print anything
```

7. **`printUpperCase("Next Level Web Dev")`**:

   - এই কলটি একটি স্ট্রিং প্যারামিটার দেয়, তাই এটি কনসোলে `NEXT LEVEL WEB DEV` আউটপুট করবে।

8. **`printUpperCase(25)`**:
   - এই কলটি একটি নম্বর প্যারামিটার দেয়, যা `isString` ফাংশন দ্বারা চেক করা হলে `false` ফেরত দেবে। তাই এই কলটি কনসোলে কিছুই প্রদর্শন করবে না।

### সারসংক্ষেপ:

এই কোডটি কাস্টম টাইপ গার্ড ব্যবহার করে একটি ফাংশন তৈরি করে যা চেক করে যে একটি মান স্ট্রিং কিনা। যদি মানটি স্ট্রিং হয়, তবে এটি সেই স্ট্রিংটির বড় হাতের সংস্করণ কনসোলে লগ করে। এটি টাইপ নিরাপত্তা এবং নির্ভুলতা বাড়াতে সহায়তা করে।

---

## TASK 16

এই কোডটি TypeScript ব্যবহার করে একটি ফাংশন তৈরি করার একটি উদাহরণ, যা অবজেক্টের বৈশিষ্ট্যগুলি গতিশীলভাবে অ্যাক্সেস করতে সক্ষম। নিচে কোডটির বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

1. **`function getProperty<T, K extends keyof T>(obj: T, key: K)`**:

   - এখানে `getProperty` নামের একটি জেনেরিক ফাংশন সংজ্ঞায়িত করা হয়েছে, যা দুটি টাইপ প্যারামিটার গ্রহণ করে:
     - `T`: একটি অবজেক্টের টাইপ।
     - `K`: `T` এর বৈশিষ্ট্যের একটি কি, যা `keyof T` ব্যবহার করে নির্ধারিত হয়। এর মানে হলো `K` টাইপটি `T` অবজেক্টের বৈধ কী হবে।

2. **`return obj[key]`**:
   - এই ফাংশনটি অবজেক্ট `obj` থেকে `key` দ্বারা নির্ধারিত বৈশিষ্ট্যের মান ফেরত দেয়। TypeScript নিশ্চিত করে যে `key` অবজেক্ট `obj` এর বৈধ কীগুলির মধ্যে একটি।

```typescript
const user = {
  name: "John",
  age: 25,
};
```

3. **`const user = {...}`**:
   - এখানে `user` নামের একটি অবজেক্ট তৈরি করা হয়েছে, যা `name` এবং `age` নামে দুটি বৈশিষ্ট্য ধারণ করে।

```typescript
console.log(getProperty(user, "name")); // John
console.log(getProperty(user, "age")); // 25
```

4. **`console.log(getProperty(user, "name"))`**:

   - এই কলটি `user` অবজেক্ট থেকে `name` বৈশিষ্ট্যের মান ফেরত দেয়, যা `John`। এটি কনসোলে `John` প্রদর্শন করে।

5. **`console.log(getProperty(user, "age"))`**:
   - এই কলটি `user` অবজেক্ট থেকে `age` বৈশিষ্ট্যের মান ফেরত দেয়, যা `25`। এটি কনসোলে `25` প্রদর্শন করে।

### সারসংক্ষেপ:

এই কোডটি একটি জেনেরিক ফাংশন তৈরি করে যা একটি অবজেক্ট এবং একটি কী গ্রহণ করে এবং সেই কী ব্যবহার করে অবজেক্টের বৈশিষ্ট্যের মান ফেরত দেয়। `keyof` ব্যবহার করে ফাংশনটি নিশ্চিত করে যে প্রদত্ত কীটি অবজেক্টের বৈধ বৈশিষ্ট্য। এটি টাইপ নিরাপত্তা প্রদান করে এবং কোরেক্ট কীস ব্যবহার নিশ্চিত করে।

---
