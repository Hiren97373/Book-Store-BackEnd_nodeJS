const express = require("express");
const { getAllBook, addBook, findBook, updateBook, deleteBook } = require("../controller/BookStore");

var router = express.Router();


/* GET HOME PAGE */

router.route('/getall').get(getAllBook);

router.route('/addbook').post(addBook);

router.route('/book/:id').get(findBook);

router.route('/book/update/:id').put(updateBook);

router.route('/book/delete/:id').delete(deleteBook);


module.exports = router