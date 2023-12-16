const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const methodOverride = require('method-override');

const Book = require('./models/book');

mongoose.connect('mongodb://127.0.0.1:27017/alphaBookClub', { useNewUrlParser: true })
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("Oh no mongo connection error!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/books', async (req, res) => {
    const { recommendedBy } = req.query;
    if (recommendedBy) {
        const books = await Book.find({ recommendedBy: recommendedBy });
        res.render('books/index.ejs', { books, recommendedBy })
    } else {
        const books = await Book.find({});
        res.render('books/index.ejs', { books, recommendedBy: '' })

    }
})

app.get('/books', async (req, res) => {
    const books = await Book.find({});
    res.render('books/index.ejs', { books })
})

app.get('/books/new', (req, res) => {
    res.render('books/new')
})

app.post('/books', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    console.log(newBook);
    res.redirect(`/books/${newBook._id}`)
})

app.get('/books/:id/edit', async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('books/edit', { book });
})

app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/books/${book._id}`);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('books/show.ejs', { book })
})

app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    res.redirect('/books');
})










app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})
