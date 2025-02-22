const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.send(JSON.stringify({books}, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const id = req.params.isbn;
  let filtered_book = books[id]
  res.send(filtered_book);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  let item = null
  for (let id in books) {
    let book = books[id];
    if(book.author == author)
      item = books[id]
  }
  res.send(item);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  let item = null
  for (let id in books) {
    let book = books[id];
    if(book.title == title)
      item = books[id]
  }
  res.send(item);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const id = req.params.isbn;
  let book = books[id]
  res.send(book.reviews);
});

module.exports.general = public_users;
