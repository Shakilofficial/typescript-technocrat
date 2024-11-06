/* 
Problem 6: You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object.
Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

Hints: Use getFullYear() method to extract the year to check the given year with current year. 
*/

type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

function isRecentBook(book: Book): boolean {
  let currentYear = new Date().getFullYear();
  let publishedYear = book.publishedYear;
  return publishedYear >= currentYear - 5;
}

const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};

console.log(isRecentBook(book1));

/* 
    Explanation:
    - The function takes a Book object as input and checks if the book was published in the last 5 years.
    - It uses the getFullYear() method to extract the current year and the published year from the Book object.
    - The getFullYear() method returns the year as a number, so it's necessary to convert it to a number before comparing it with the current year.
    - The function returns true if the published year is greater than or equal to the current year minus 5, indicating that the book was published within the last 5 years.
    
    This approach is efficient and leverages TypeScript's type safety to ensure that the input object is a Book object with the correct properties.
*/