const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    recommendedBy: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

// const reviewSchema = new mongoose.Schema({
//     reader: {
//         type: String,
//         required: true
//     },
//     stars: {
//         type: Number,
//         required: true,
//         integer: true,
//         min: 1,
//         max: 10
//     },
//     review: {
//         type: String,
//         required: true
//     }
// })

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

// const Review = mongoose.model('Review', reviewSchema);
// module.exports = Review;