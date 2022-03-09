const BookStore = require("../model/BookStore");


//get all Book
exports.getAllBook = async (req, res, next) => {
    try {

        const book = await BookStore.find();

        res.status(200).json({
            Status: "success",
            book
        })

    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: "get all book is not find"
        })
    }
}

exports.addBook = async (req, res, next) => {
    try {

        const book = await BookStore.create(req.body)

        if (!book) {
            return new Error("some issue data is not add")
        }

        res.status(200).json({
            status: "success",
            book
        })


    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: "Book data is not add"
        })
    }
}

exports.findBook = async (req, res, next) => {
    try {

        const book = await BookStore.findById(req.params.id)

        if (!book) {
            return new Error("Data is not found")
        }

        res.status(200).json({
            status: "success",
            book
        })


    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: "ID is not find"
        })
    }
}

exports.updateBook = async (req, res, next) => {
    try {

        const rem = await BookStore.findByIdAndUpdate(req.params.id, req.body)
        const book = await BookStore.findById(req.params.id)

        if (!book) {
            return new Error("Data is not found")
        }

        res.status(200).json({
            status: "success",
            book
        })


    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: "update data is not found"
        })
    }
}

exports.deleteBook = async (req, res, next) => {
    try {


        const book = await BookStore.findById(req.params.id)

        await book.remove()

        res.status(200).json({
            status: "success deleted"
        })


    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: "delete data is not found"
        })
    }
}