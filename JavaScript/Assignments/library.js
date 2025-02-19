const library = [
  {
    title: "The Reconstruction of Religious thoughs in Islam",
    author: "Allama Iqbal",
    yearPublished: 1999,
  },
  { title: "Metamorphosis", author: "Franz Kafka", yearPublished: 2003 },
  { title: "Crime and Punishment", author: "Dosteovsky", yearPublished: 2004 },
];

// addign the new book
const newBook = {
  title: "System Design",
  author: "sk",
  yearPublished: 2020,
};

library.push(newBook);

//searching the new book
library.forEach((book) => {
  if (book.title === "System Design") {
    console.log(
      `${book.title} by ${book.author}. Published in the year ${book.yearPublished}`
    );
  }
});

//Remove a book by title
const index = library.findIndex((book) => book.title === "Metamorphosis");
library.splice(index, 1);

//update the book years publish date
library[0].yearPublished = 2005;
console.log(library[0]);
//
console.log(library);
