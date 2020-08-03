import { compose, pipe } from "lodash/fp";
import { Map } from "immutable";
import { produce } from "immer";

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};
updated.address.city = "New York";
console.log(person);

const numbers = [1, 2, 3];

//Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

//Removing
const removed = numbers.filter((n) => n !== 2);

//Updating
const updated = numbers.map((n) => (n == 2 ? 20 : n));

//Immutable Practice
//let book = Map({ title: "Harry Potter" });

//function publish(book) {
//return book.set("isPublished", true)
//}

//publish(book);

//console.log(book.toJS());

//Immer Practice
let book = Map({ title: "Harry Potter" });

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(updated);
