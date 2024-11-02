### টাইপস্ক্রিপ্ট কী ?

টাইপস্ক্রিপ্ট একটি স্ট্রিক্টলি টাইপড অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং ল্যাঙ্গুয়েজ, যা জাভাস্ক্রিপ্টের উপর ভিত্তি করে তৈরি। সহজভাবে বলতে গেলে, এটি জাভাস্ক্রিপ্টের একটি এক্সটেন্ডেড ভার্সন বা আরও শক্তিশালী সংস্করণ। তাই আমরা বলতে পারি, টাইপস্ক্রিপ্ট আসলে জাভাস্ক্রিপ্টই।

তাহলে প্রশ্ন আসতে পারে, জাভাস্ক্রিপ্ট থাকা সত্ত্বেও টাইপস্ক্রিপ্ট কেন?

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

### টাইপস্ক্রিপ্ট ব্যবহার কেন করবো :

স্ট্যাটিক টাইপিং: টাইপস্ক্রিপ্টে ডাটা টাইপ আগে থেকেই নির্ধারণ করা থাকে, ফলে কোড লেখার সময়ই অনেক ভুল ধরা পড়ে। বড় প্রজেক্টে কোড মেইনটেইন করাও সহজ হয়।

স্কেলেবিলিটি: বড় প্রজেক্টে টাইপস্ক্রিপ্ট জাভাস্ক্রিপ্টের চেয়ে বেশি স্কেলেবল কারণ এটা স্ট্যাটিক টাইপিং এবং অবজেক্ট-ওরিয়েন্টেড সাপোর্টেড

টুলস এবং ইকোসিস্টেম: টাইপস্ক্রিপ্টে এমন সব শক্তিশালী ডেভেলপমেন্ট টুল রয়েছে যা কোড লেখা, ডিবাগ করা ও রিফ্যাক্টর করা সহজ করে।

জাভাস্ক্রিপ্টের সুপারসেট: টাইপস্ক্রিপ্ট মূলত জাভাস্ক্রিপ্টের একটি সুপারসেট, তাই টাইপস্ক্রিপ্ট কোড সহজেই জাভাস্ক্রিপ্টে কম্পাইল করা যায়।

---

### Type alias আর Interface-এর মধ্যে পার্থক্য কী, আর কখন কোনটা ব্যবহার করা উচিত? 💡

টাইপ এলিয়াস এবং ইন্টারফেস দুটোই অবজেক্টের টাইপ ডিফাইন করতে ব্যবহৃত হয়, তবে দুটোর কাজ একটু ভিন্ন। 🕵️‍♂️

#### 🧩 Type alias (টাইপ এলিয়াস)

টাইপ এলিয়াস আসলে শুধু অবজেক্টের টাইপ নির্ধারণের জন্য না, বরং যেকোনো ধরনের টাইপ নির্ধারণে ব্যবহার করা যায়। অর্থাৎ, আমরা চাইলে number, string, union, intersection, tuple বা primitive টাইপ সবকিছুই type alias দিয়ে বলে দিতে পারি। উদাহরণস্বরূপ, ধরেন আমরা type ID = number; এভাবে একটা টাইপ বানিয়ে নিলাম। এরপর যখনই ID টাইপের ভ্যারিয়েবল লাগবে, আমরা শুধু ID টাইপটা ব্যবহার করলেই কাজ হয়ে যাবে, বারবার number লিখতে হবে না।
আরও একটা সুবিধা হচ্ছে, টাইপ এলিয়াসে আমরা ইন্টারসেকশন টাইপ ব্যবহার করতে পারি, যেটা দিয়ে দুই বা তার বেশি টাইপ একত্রে মিশিয়ে একটি নতুন টাইপ বানানো যায়।
তবে একটা ব্যাপার মনে রাখা জরুরি: টাইপ ডিক্লেয়ারেশন মার্জিং সাপোর্ট করে না । অর্থাৎ, একই নামে একাধিক টাইপ তৈরি করতে গেলে টাইপস্ক্রিপ্ট আমাদের লাল বাতি দেখাবে 😀

#### 🧩 Interface (ইন্টারফেস)

ইন্টারফেস মূলত অবজেক্ট টাইপ নির্ধারণের জন্য ব্যবহার করা হয়। ইন্টারফেসকে আমরা extend করে অবজেক্টের প্রপার্টি যোগ করতে পারি। এই কারণেই, যেকোনো অবজেক্ট ওরিয়েন্টেড ফিচার যেমন ইনহেরিটেন্স দরকার হলে ইন্টারফেস খুবই উপযোগী।
আর ইন্টারফেসের আরেকটা বিশেষ সুবিধা হলো, একই নামে একাধিক ইন্টারফেস তৈরি করা গেলে টাইপস্ক্রিপ্ট সেই ইন্টারফেসগুলোকে মার্জ করে ফেলবে, যাকে বলে ডিক্লেয়ারেশন মার্জিং। এটা টাইপ এলিয়াসে সম্ভব না, কিন্তু ইন্টারফেসে আমরা একই নামে বারবার ইন্টারফেস তৈরি করতে পারি।

#### 🔑 তাহলে Type আর Interface এর মধ্যে পার্থক্য কী?

টাইপ এলিয়াসে : যেকোনো প্রিমিটিভ টাইপ, ইউনিয়ন, ইন্টারসেকশন এবং অবজেক্ট টাইপ করা যায়। কিন্তু একই নামে একাধিক টাইপ বানানো যাবে না।
ইন্টারফেসে : অবজেক্ট টাইপ নির্ধারণ করা যায় এবং extend বা ইনহেরিট করে নতুন প্রপার্টি যোগ করা যায়। একই নামে একাধিক ইন্টারফেস বানানো সম্ভব, যেগুলো টাইপস্ক্রিপ্ট মার্জ করে নেয়।

#### 📌 কখন কোনটা ব্যবহার করবেন?

যদি জটিল টাইপ দরকার হয় বা অনেক টাইপ একত্রে মিশিয়ে (ইন্টারসেকশন) কিছু তৈরি করতে চান, তাহলে টাইপ এলিয়াস বেছে নিন।
আর যদি অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ফিচার প্রয়োজন হয় যেমন ইনহেরিটেন্স বা এক্সটেন্ড করা, তাহলে ইন্টারফেস সবচেয়ে ভালো অপশন। ইন্টারফেস ক্লাস এবং অবজেক্টের জন্যই বেশি উপযোগী।

---