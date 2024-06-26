const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
///////////////////////////////////////
//Destructuring Objects and Arrays
const book = getBook(3);
const {
  author,
  title,
  pages,
  publicationDate: pub_date,
  genres,
  hasMovieAdaptation: has_adap,
} = book;

console.log(pages, pub_date, genres, has_adap);

const [first, second] = genres;
const [justFirst] = genres;
const [...others] = genres;
console.log(first, second, others);

///////////////////////////////////////
//Rest/Spread Operator
console.log(...genres);
console.log(genres);

const updateBooks = {
  ...book,
  city: "New York",
  pages: 123,
};
console.log(updateBooks);

///////////////////////////////////////
//Short-Circuiting

console.log(0 && "Some String");
console.log("" || "gülşah");
console.log(undefined ?? false);
console.log(false ?? "b");
console.log("" ?? "a");
console.log(0 ?? "a");

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return librarything + goodreads;
}

console.log(getTotalReviewCount(book));

*/
/*
///////////////////////////////////////
//The Array map Method

const books = getBooks();
const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

const essentialData2 = books.map((book) => ({
  pages: book.pages,
  hasMovieAdaptation: book.hasMovieAdaptation,
}));

console.log(essentialData);
console.log(essentialData2);

///////////////////////////////////////
//The Array filter Method

const longBooksWithMovie = books
  .filter((b) => b.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((b) => b.genres.includes("adventure"))
  .map((b) => b.title);
console.log(adventureBooks);

///////////////////////////////////////
//The Array reduce Method

const pagesAllBooks = books.reduce((acc, b) => b.pages + acc, 0);
pagesAllBooks; //3227

///////////////////////////////////////
//The sort Array Method !!Mutate array ,take copy with slice()

const arr = [1, 5, 3, 8, 2, 9, 6, 78, 8, 7];
const sortedArr = arr.slice().sort((a, b) => a - b); //ascending ||current-next return>0
const sortedArr2 = arr.slice().sort((a, b) => b - a); //descanding
console.log(sortedArr);
console.log(sortedArr2);
console.log(arr);

const sortedByPages = books
  .slice()
  .sort((current, next) => current.pages - next.pages);
console.log(sortedByPages);

///////////////////////////////////////
//Working With Immutable Arrays

newBookObJ = {
  id: 20,
  title: "Oblomov",
  pages: 2000,
};

const arrAfterAdd = [...books, newBookObJ];
arrAfterAdd;
console.log(books.length);
console.log(arrAfterAdd.length);

const arrAfterDelete = arrAfterAdd.filter((b) => b.id !== 1);
console.log(books.length);
console.log(arrAfterDelete.length);

const arrAfterUpdate = arrAfterDelete.map((b) =>
  b.id === 20 ? { ...b, pages: 1 } : b
);

console.log(arrAfterUpdate);
*/

///////////////////////////////////////
//Asynchronous Javascript: Promises

console.log("First");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log("Second");
  });

console.log("Third");

///////////////////////////////////////
//Asynchronous Javascript: Async/Await

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await res.json();
  console.log("Second");
  console.log(data);
  return data;
}

console.log("First");

const dataRes = getPosts();
console.log(dataRes);

console.log("Third");
