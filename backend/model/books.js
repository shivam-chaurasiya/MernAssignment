const mongoose = require("mongoose");
const User = require("./User");

const bookSchema = new mongoose.Schema({
  bookName: {
        type: String,
        required: true,
      },
  bookauthor: {
    type: String,
    required: true,
  },
  bookDescription: {
    type: String,
    required: true,
  },
  bookprice: {
    type: Number,
    required: true,
  },
  userid : {
   type : mongoose.Schema.Types.ObjectId,
   ref : "User",
   required: true
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;