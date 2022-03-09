const mongoose = require("mongoose")

const bookStoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
    },
    image: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model("BookStore", bookStoreSchema)