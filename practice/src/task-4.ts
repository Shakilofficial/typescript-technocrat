/*
Objective: Create union and intersection types using interfaces.
Instructions:
- Define interfaces `Book` and `Magazine`.
- Create:
  - A type that is a **union** of `Book` and `Magazine`.
  - A type that is an **intersection** of `Book` and `Magazine`.
- 
*/

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

type BookAndMagazine = Book & Magazine;
type BookOrMagazine = Book | Magazine;

const book: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

const magazine: Magazine = {
  title: "National Geographic",
  author: "National Geographic",
  issue: 1,
};

const bookAndMagazine: BookAndMagazine = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  issue: 1,
};

const bookOrMagazine: BookOrMagazine = {
  title: "National Bird",
  author: "National Geographic",
  year: 1925,
  issue: 1,
};

console.log(bookAndMagazine);
console.log(bookOrMagazine);

/* 
Explain the Working flow of the Code

1. The type Book is defined.
2. The type Magazine is defined.
3. The type BookAndMagazine is defined.
4. The type BookOrMagazine is defined.
5. The type BookAndMagazine is used to create a variable called bookAndMagazine.
6. The type BookOrMagazine is used to create a variable called bookOrMagazine.
7. The variable bookAndMagazine is assigned an object with the properties title, author, year, and issue.
8. The variable bookOrMagazine is assigned an object with the properties title, author, year, and issue.
9. The variable bookAndMagazine is logged to the console.
10. The variable bookOrMagazine is logged to the console.
*/
