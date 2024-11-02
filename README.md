### ১) টাইপস্ক্রিপ্ট পরিচিতি (Introduction to TypeScript)

টাইপস্ক্রিপ্ট একটি ওপেন সোর্স প্রোগ্রামিং ল্যাঙ্গুয়েজ যা মাইক্রোসফট দ্বারা তৈরি। টাইপস্ক্রিপ্ট একটি স্ট্রিক্টলি টাইপড অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং ল্যাঙ্গুয়েজ, যা জাভাস্ক্রিপ্টের উপর ভিত্তি করে তৈরি। সহজভাবে বলতে গেলে, এটি জাভাস্ক্রিপ্টের একটি এক্সটেন্ডেড ভার্সন বা আরও শক্তিশালী সংস্করণ। তাই আমরা বলতে পারি, টাইপস্ক্রিপ্ট আসলে জাভাস্ক্রিপ্টই।

#### তাহলে প্রশ্ন আসতে পারে, জাভাস্ক্রিপ্ট থাকা সত্ত্বেও টাইপস্ক্রিপ্ট কেন?

এর কারণ হলো এদের মধ্যে কিছু মৌলিক পার্থক্য আছে। জাভাস্ক্রিপ্ট ডাইনামিক্যালি টাইপড, অর্থাৎ, ভেরিয়েবলের টাইপ ডিক্লেয়ার করা প্রয়োজন হয় না। ফলে আমরা একই ভেরিয়েবলে নম্বর, স্ট্রিং, বুলিয়ান, এমনকি অ্যারে বা অবজেক্টও রাখতে পারি। এতে যেমন সুবিধা আছে, তেমনি অসুবিধাও আছে।

ধরুন, আমাদের একটি add ফাংশন আছে, যেটি দুটি সংখ্যার যোগফল রিটার্ন করে:

function add(a, b) {
return a + b;
}

এখন, add(1, 2) লিখলে আমরা ৩ পাবো, যা প্রত্যাশিত। তবে যদি কোনোভাবে add("1", 2) কল করি, তখন আমরা ৩ এর পরিবর্তে "12" পাবো, কারণ জাভাস্ক্রিপ্ট এখানে সংখ্যার পরিবর্তে স্ট্রিং কনক্যাটেনেশন করে।

টাইপস্ক্রিপ্টের মাধ্যমে আমরা এই সমস্যা সহজেই এড়াতে পারি। add ফাংশনটি টাইপস্ক্রিপ্টে এমনভাবে লেখা যেতে পারে:

function add(a: number, b: number): number {
return a + b;
}

এখানে আমরা স্পষ্টভাবে বলে দিয়েছি যে a এবং b হবে number টাইপ, এবং ফাংশনটি number টাইপের ভ্যালু রিটার্ন করবে। এখন যদি add("1", 2) কল করতে চাই, আমাদের এডিটরে সঙ্গে সঙ্গে এরর দেখাবে এবং বলবে "Argument of type string is not assignable to parameter of type number"। অর্থাৎ, ডেভেলপমেন্ট সময়েই আমরা ভুলগুলো ধরতে পারছি, যা আমাদের কোডে বাগ কমাতে ও সময় বাঁচাতে সাহায্য করে।

#### টাইপস্ক্রিপ্ট ব্যবহার কেন করবেন :

- স্ট্যাটিক টাইপিং: টাইপস্ক্রিপ্টে ডাটা টাইপ আগে থেকেই নির্ধারণ করা থাকে, ফলে কোড লেখার সময়ই অনেক ভুল ধরা পড়ে। বড় প্রজেক্টে কোড মেইনটেইন করাও সহজ হয়।

- স্কেলেবিলিটি: বড় প্রজেক্টে টাইপস্ক্রিপ্ট জাভাস্ক্রিপ্টের চেয়ে বেশি স্কেলেবল কারণ এটা স্ট্যাটিক টাইপিং এবং অবজেক্ট-ওরিয়েন্টেড সাপোর্টেড

- টুলস এবং ইকোসিস্টেম: টাইপস্ক্রিপ্টে এমন সব শক্তিশালী ডেভেলপমেন্ট টুল রয়েছে যা কোড লেখা, ডিবাগ করা ও রিফ্যাক্টর করা সহজ করে।

- জাভাস্ক্রিপ্টের সুপারসেট: টাইপস্ক্রিপ্ট মূলত জাভাস্ক্রিপ্টের একটি সুপারসেট, তাই টাইপস্ক্রিপ্ট কোড সহজেই জাভাস্ক্রিপ্টে কম্পাইল করা যায়।

---

### ২) টাইপস্ক্রিপ্ট এবং FNM ইনস্টল করা ও টাইপস্ক্রিপ্ট ফাইল চালানোর পদ্ধতি

টাইপস্ক্রিপ্ট ব্যবহার করতে হলে প্রথমে আপনার সিস্টেমে টাইপস্ক্রিপ্ট এবং Node.js ইনস্টল করতে হবে। এখানে Fast Node Manager (FNM) ব্যবহার করার পদ্ধতি বর্ণনা করা হলো:

#### ✅ FNM ইনস্টল করা

**Windows PowerShell** খুলুন এবং নিচের কমান্ডটি ব্যবহার করে FNM ইনস্টল করুন:

```powershell
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 22

# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`

# verifies the right npm version is in the environment
npm -v # should print `10.9.0`
```

#### ✅ FNM কনফিগারেশন

FNM ইনস্টল করার পর, আপনার PowerShell প্রোফাইল ফাইলে নিচের লাইনটি যুক্ত করুন:

```powershell
fnm env | Out-String | Invoke-Expression
```

PowerShell প্রোফাইল ফাইলটি খুলতে নিচের কমান্ডটি ব্যবহার করুন:

```powershell
notepad $PROFILE
```

এটি আপনার PowerShell প্রোফাইল ফাইল খুলবে, যেখানে আপনি উপরের লাইনটি যুক্ত করবেন।

#### ✅ PowerShell পুনরায় চালু করা

PowerShell পুনরায় চালু করুন বা নতুন একটি PowerShell টার্মিনাল খুলুন।

#### ✅ Node.js ইনস্টল করা

FNM ব্যবহার করে Node.js ইনস্টল করতে নিচের কমান্ডটি ব্যবহার করুন:

```powershell
fnm install latest
```

#### ✅ টাইপস্ক্রিপ্ট ইনস্টল করা

Node.js ইনস্টল করার পর, টাইপস্ক্রিপ্ট ইনস্টল করতে নিচের কমান্ডটি ব্যবহার করুন:

```powershell
npm install -g typescript
```

#### ✅ টাইপস্ক্রিপ্ট ফাইল চালানোর পদ্ধতি

টাইপস্ক্রিপ্ট ফাইলগুলো চালানোর জন্য নিচের পদক্ষেপগুলো অনুসরণ করুন:

প্রথমে টার্মিনালে ts-node-dev এবং typescript প্যাকেজগুলো ইনস্টল করুন:

```bash
npm install ts-node-dev typescript
```

এরপর, টাইপস্ক্রিপ্ট ফাইল চালানোর জন্য নিচের কমান্ডটি ব্যবহার করুন:

```bash
ts-node-dev --respawn --transpile-only filename.ts
```

এখানে `filename.ts` এর জায়গায় আপনার টাইপস্ক্রিপ্ট ফাইলের নাম দিন। এই কমান্ডটি টাইপস্ক্রিপ্ট ফাইলটি চালু করবে এবং যে কোনও পরিবর্তনের জন্য স্বয়ংক্রিয়ভাবে পুনরায় চালু হবে।

এখন আপনি সফলভাবে টাইপস্ক্রিপ্ট এবং FNM ইনস্টল করেছেন এবং টাইপস্ক্রিপ্ট ফাইল চালানোর প্রস্তুতি নিচ্ছেন!

---

### ৩) আপনার প্রথম টাইপস্ক্রিপ্ট প্রোগ্রাম (Your First TypeScript Program)

প্রথম টাইপস্ক্রিপ্ট প্রোগ্রাম লেখার জন্য `.ts` ফাইল তৈরি করুন এবং নিচের কোডটি লিখুন:

```typescript
let message: string = "Hello, TypeScript!";
console.log(message);
```

এরপর কমান্ড লাইনে টাইপস্ক্রিপ্ট ফাইলটি জাভাস্ক্রিপ্টে কম্পাইল করুন:

```bash
tsc filename.ts
node filename.js
```

---

### ৪) বেসিক ডেটা টাইপ (Mastering Basic Data Types)

টাইপস্ক্রিপ্টে বিভিন্ন ধরনের ডেটা টাইপ রয়েছে যা কোডকে আরও সুসংগঠিত করে। গুরুত্বপূর্ণ টাইপসমূহ:

- `number`: সংখ্যার জন্য
- `string`: স্ট্রিং বা টেক্সটের জন্য
- `boolean`: সত্য বা মিথ্যার জন্য
- `array`: বিভিন্ন মানের তালিকার জন্য

```typescript
let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
```

---

### ৫) অবজেক্ট, অপশনাল এবং লিটারেল টাইপস (Object Power, Optional and Literal Types)

টাইপস্ক্রিপ্টে অবজেক্ট ব্যবহার করে ডেটা গঠন করা যায়। অপশনাল প্রপার্টি `?` দিয়ে ডিফাইন করা হয় যা প্রপার্টি বাদ রাখতে সাহায্য করে, এবং লিটারেল টাইপ নির্দিষ্ট মানে সীমাবদ্ধ করে।

```typescript
type User = {
  name: string;
  age?: number; // Optional
  role: "admin" | "user"; // Literal type
};

const user: User = { name: "Alice", role: "admin" };
```

---

### ৬) ফাংশন টাইপস্ক্রিপ্টে (Function in TypeScript)

টাইপস্ক্রিপ্টে ফাংশনের প্যারামিটার এবং রিটার্ন টাইপ ডিফাইন করা যায়, যা কোডের নিরাপত্তা বৃদ্ধি করে।

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

---

### ৭) ডেসট্রাকচারিং (Destructuring in TypeScript)

ডেসট্রাকচারিং ব্যবহার করে সহজে অবজেক্ট বা অ্যারে থেকে নির্দিষ্ট ডেটা বের করা যায়।

```typescript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
```

---

### ৮) টাইপ এলিয়াসেস (Type Aliases in TypeScript)

টাইপ এলিয়াস তৈরি করে জটিল টাইপকে সহজ নামে ব্যবহার করা যায়। এটি কোডকে পরিষ্কার এবং সুসংগঠিত করে।

```typescript
type Point = { x: number; y: number };
let position: Point = { x: 10, y: 20 };
```

---

### ৯) ইউনিয়ন এবং ইন্টারসেকশন টাইপস (Union and Intersection Types)

ইউনিয়ন টাইপের মাধ্যমে একটি ভ্যারিয়েবল বিভিন্ন ধরনের মান রাখতে পারে। ইন্টারসেকশন টাইপ দুটি বা ততোধিক টাইপ একত্রিত করে।

```typescript
type NumberOrString = number | string;
let data: NumberOrString = 10;

type A = { a: number };
type B = { b: string };
type AB = A & B; // Intersection type
```

---

### ১০) টার্নারি, অপশনাল চেইনিং এবং নালিশ কোলেসিং (Ternary, Optional Chaining & Nullish Coalescing)

এই বিশেষ অপারেটরগুলি টাইপস্ক্রিপ্ট কোডকে সংক্ষিপ্ত এবং নিরাপদ করে তোলে।

```typescript
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // Ternary Operator

let user = { name: "Alice", address: { city: "Wonderland" } };
let city = user?.address?.city; // Optional Chaining

let input = null;
let output = input ?? "Default"; // Nullish Coalescing
```

---

### ১১) নেভার, আননোন এবং নালেবল টাইপস (Never, Unknown & Nullable Types)

- `never` টাইপ এমন ফাংশনের জন্য যা কিছু রিটার্ন করে না।
- `unknown` টাইপ যেকোনো মান গ্রহণ করতে পারে, তবে ব্যবহারের আগে টাইপ চেক করতে হবে।
- `nullable` টাইপ, যেখানে মান `null` বা `undefined` হতে পারে।

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

let userName: string | null = null;
```

---

### ১২) টাইপ এসারশন এবং টাইপ ন্যারোইং (Type Assertion/Type Narrowing)

টাইপ এসারশন টাইপের জন্য নিশ্চিত হওয়া যায়। টাইপ ন্যারোইংয়ের মাধ্যমে কোডে টাইপ চেক করা যায়।

```typescript
let someValue: any = "Hello";
let strLength: number = (someValue as string).length;
```

---

### ১৩) ইন্টারফেস এবং টাইপের তুলনা (Interface, Type vs Interface)

ইন্টারফেস অবজেক্টের জন্য ব্লুপ্রিন্ট তৈরি করে, তবে টাইপের সাথে কিছু পার্থক্য রয়েছে।

```typescript
interface User {
  name: string;
  age: number;
}

type Person = { name: string; age: number };
```

---

### ১৪) জেনেরিকস পরিচিতি (Introduction to Generics)

জেনেরিকস এমন একটি ফিচার যা ফাংশন, ক্লাস বা ইন্টারফেসে বিভিন্ন টাইপের ডেটা নিয়ে কাজ করতে সক্ষম করে।

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

---

### ১৫) ইন্টারফেসের সাথে জেনেরিকস (Generics with Interfaces)

ইন্টারফেসের সাথে জেনেরিকস ব্যবহার করে বিভিন্ন টাইপের ডেটার জন্য একটি ব্লুপ্রিন্ট তৈরি করা যায়।

```typescript
interface Box<T> {
  content: T;
}
```

---

### ১৬) জেনেরিকস সহ ফাংশন (Function with Generics)

জেনেরিকস সহ ফাংশন তৈরি করে কোডের পুনঃব্যবহারযোগ্যতা বৃদ্ধি করা যায়।

```typescript
function addToArray<T>(arr: T[], value: T): T[] {
  return [...arr, value];
}
```

---

### ১৭) কন্সট্রেইন্টস (Constraints in TypeScript)

কন্সট্রেইন্টস ব্যবহার করে জেনেরিকের জন্য নির্দিষ্ট টাইপ নির্ধারণ করা যায়।

```typescript
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```

---

### ১৮) কন্সট্রেইন্টস 'keyof' এর সাথে (Constraint using Keyof)

`keyof` দিয়ে কন্সট্রেইন্ট দিয়ে নির্দিষ্ট প্রোপার্টির ভিত্তিতে সীমাবদ্ধ করা যায়।

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

---

### ১৯) অ্যাসিঙ্ক্রোনাস টাইপস্ক্রিপ্ট (Asynchronous TypeScript)

অ্যাসিঙ্ক্রোনাস কার্যকলাপ যেমন `Promise` এবং `async/await` টাইপস্ক্রিপ্টেও ব্যবহৃত হয়।

```typescript
async function fetchData(): Promise<string> {
  return "Data";
}
```

---

### ২০) কন্ডিশনাল টাইপস (Conditional Types)

টাইপস্ক্রিপ্টের কন্ডিশনাল টাইপস হল এমন একটি শক্তিশালী বৈশিষ্ট্য যা টাইপ নির্ধারণের সময় শর্ত সাপেক্ষে আচরণ পরিবর্তন করতে পারে। এটি আমাদের কোডের মধ্যে আরও নমনীয়তা এবং ডাইনামিজম আনতে সাহায্য করে।

**ব্যবহার:** কন্ডিশনাল টাইপস সাধারণত `T extends U ? X : Y` ফর্ম্যাটে লেখা হয়, যেখানে `T` হচ্ছে আমাদের ইনপুট টাইপ, `U` হচ্ছে যে শর্ত যাচাই করা হচ্ছে, এবং `X` বা `Y` হচ্ছে রিটার্ন টাইপ যা শর্ত অনুযায়ী নির্ধারিত হয়।

**উদাহরণ:**

```typescript
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"
```

এখানে `IsString` টাইপ চেক করছে যে প্রাপ্ত টাইপ `string` কিনা এবং সঠিক উত্তরের ভিত্তিতে "Yes" অথবা "No" ফেরত দিচ্ছে। এটি ব্যবহার করে আমাদের কোডের বিভিন্ন অংশে শর্তের উপর ভিত্তি করে টাইপ তৈরি করা সম্ভব হয়।

---

### ২১) ম্যাপড টাইপস (Mapped Types)

ম্যাপড টাইপস হল টাইপস্ক্রিপ্টের একটি বৈশিষ্ট্য যা বিদ্যমান টাইপগুলোকে নতুন টাইপে রূপান্তরিত করতে সাহায্য করে। এটি ব্যবহার করে আমরা নির্দিষ্ট নিয়মের ভিত্তিতে একটি টাইপকে পরিবর্তন করতে পারি।

**ব্যবহার:** সাধারণত ম্যাপড টাইপস বিভিন্ন প্রোপার্টির উপর ভিত্তি করে নতুন টাইপ তৈরি করতে ব্যবহৃত হয়।

**উদাহরণ:**

```typescript
type User = {
  name: string;
  age: number;
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadOnlyUser = ReadOnly<User>;

// ReadOnlyUser এর প্রোপার্টি এখন পরিবর্তন করা যাবে না
```

এখানে `ReadOnly` টাইপ একটি মৌলিক টাইপ (যেমন `User`) নিয়ে আসছে এবং সেটির সকল প্রোপার্টি `readonly` করে দিচ্ছে। এটি ব্যবহার করে আমরা সহজেই বিদ্যমান টাইপকে নতুন ধরনে রূপান্তর করতে পারি।

---

### ২২) ইউটিলিটি টাইপস (Utility Types)

টাইপস্ক্রিপ্টে কিছু নির্মিত ইউটিলিটি টাইপস রয়েছে যা সাধারণ কাজগুলোকে সহজতর করে তোলে এবং কোডের পুনঃব্যবহারযোগ্যতা বাড়ায়। এই টাইপগুলো ব্যবহার করে আমরা দ্রুত এবং কার্যকরভাবে টাইপ তৈরি করতে পারি।

**কিছু প্রচলিত ইউটিলিটি টাইপস:**

1. **Partial<T>**: একটি টাইপের সমস্ত প্রোপার্টিকে ঐচ্ছিক (optional) করে।

   ```typescript
   type PartialUser = Partial<User>;
   ```

2. **Required<T>**: একটি টাইপের সমস্ত প্রোপার্টিকে আবশ্যক (required) করে।

   ```typescript
   type RequiredUser = Required<PartialUser>;
   ```

3. **Pick<T, K>**: একটি টাইপের মধ্যে থেকে নির্দিষ্ট প্রোপার্টি বেছে নিয়ে নতুন টাইপ তৈরি করে।

   ```typescript
   type UserName = Pick<User, "name">;
   ```

4. **Omit<T, K>**: একটি টাইপ থেকে নির্দিষ্ট প্রোপার্টি বাদ দিয়ে নতুন টাইপ তৈরি করে।
   ```typescript
   type UserWithoutAge = Omit<User, "age">;
   ```

এগুলি ছাড়াও আরও অনেক ইউটিলিটি টাইপ রয়েছে, যা টাইপস্ক্রিপ্টের সাথে কাজ করা সহজ করে তোলে এবং কোডের জটিলতা কমায়। টাইপস্ক্রিপ্টের ইউটিলিটি টাইপগুলো ব্যবহার করে কোড কমপ্লেক্সিটি এবং রিডেবিলিটি উন্নত করা সম্ভব।

### ২৩) অগ্রসর জেনেরিকস (Advanced Generics)

টাইপস্ক্রিপ্টে জেনেরিকস ব্যবহার করে কোডকে আরও ডাইনামিক এবং পুনঃব্যবহারযোগ্য করা যায়। জেনেরিকস আমাদের ফাংশন, ক্লাস এবং ইন্টারফেসে একাধিক টাইপ নিয়ে কাজ করতে দেয়। টাইপ কন্সট্রেইন্ট দিয়ে জেনেরিক টাইপের ক্ষমতা আরও বিস্তৃত করা যায়।

- **জেনেরিকস এর সাথে টাইপ কন্সট্রেইন্টস**: কিছু ক্ষেত্রে নির্দিষ্ট প্রোপার্টি থাকা প্রয়োজন হয়। কন্সট্রেইন্ট দিয়ে তা নির্ধারণ করা যায়।
- **কমপ্লেক্স টাইপ ম্যানিপুলেশন**: জেনেরিক টাইপের সাহায্যে বিভিন্ন টাইপ কন্ডিশন প্রয়োগ করা যায় যেমন - `keyof` এবং `in` অপারেটর।

```typescript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

### ২৪) টাইপ গার্ড এবং টাইপ প্রেডিকেট (Type Guards and Type Predicates)

টাইপ গার্ড এবং টাইপ প্রেডিকেট টাইপস্ক্রিপ্টে কোডের নির্দিষ্ট অংশে নির্দিষ্ট টাইপ নিশ্চিত করতে ব্যবহৃত হয়। এটি কোডকে আরও সুরক্ষিত এবং নির্ভুল করে।

- **টাইপ গার্ড:** এটি কন্ডিশন চেকের মাধ্যমে টাইপ নির্ধারণ করতে সাহায্য করে।
- **ইনস্ট্যান্স চেক:** `instanceof` এবং `typeof` ব্যবহার করে টাইপ নির্ধারণ করা যায়।

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

let data: unknown = "Hello";
if (isString(data)) {
  console.log(data.toUpperCase()); // এখানে টাইপ নিশ্চিত করা হয়েছে
}
```

---

এই বিষয়গুলো টাইপস্ক্রিপ্টের শক্তি এবং কোড নিরাপত্তা নিশ্চিত করে। টাইপস্ক্রিপ্টে জেনেরিকস এবং টাইপ গার্ড আরও জটিল ও বড় প্রজেক্ট পরিচালনায় সহায়ক ভূমিকা পালন করে।

### ২৫) TypeScript in Practice (প্র্যাকটিক্যাল টাইপস্ক্রিপ্ট ব্যবহারের জন্য টিপস)

টাইপস্ক্রিপ্ট প্রজেক্টে ব্যবহার করার সময় কিছু সাধারণ কৌশল এবং টিপস অনুসরণ করা সহায়ক হতে পারে, বিশেষ করে বড় এবং জটিল অ্যাপ্লিকেশনগুলোর জন্য। টাইপস্ক্রিপ্টের ব্যবহার কোডকে আরও সংগঠিত এবং পরিচালনাযোগ্য করে তোলে। এখানে কিছু গুরুত্বপূর্ণ কৌশল:

1. **ফাইল এবং ফোল্ডার কাঠামো:** বড় প্রজেক্টে ফোল্ডারগুলো গঠন করে রাখতে টাইপস্ক্রিপ্ট ফাইলগুলোকে `models`, `services`, `controllers` ইত্যাদিতে ভাগ করা সুবিধাজনক।
2. **মডিউলার কোড লিখুন:** কোড পুনঃব্যবহারযোগ্য করতে এবং পরিচালনা সহজ করতে ছোট ছোট মডিউল তৈরি করা ভালো।
3. **স্ট্রিক্ট টাইপ চেকিং:** প্রজেক্টে টাইপের নির্ভুলতা বজায় রাখতে `strict` অপশন চালু রাখা ভালো।
4. **ইন্টারফেস এবং টাইপ ব্যবহার করুন:** স্পষ্টভাবে ডেটা স্ট্রাকচার তৈরি করতে এবং ভবিষ্যতের কোডের জন্য সহজবোধ্য করতে।

---
