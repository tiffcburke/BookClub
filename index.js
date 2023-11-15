const express = require('express');
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();
app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));



let books = [
    {
        username: "kcasario",
        book: "Tress of the Emerald Sea"
    },
    {
        username: "kelgirl",
        book: "Montanan Book"
    },
    {
        username: "tia",
        book: "My little pony"
    },
    {
        username: "jamesK",
        book: "Engineering book"
    }
]

let newNotes = [
    {
        id: uuid(),
        title: 'Page 10',
        comment: "wow I cant believe that happened so crazy like wow"
    },
    {
        id: uuid(),
        title: 'Page 25',
        comment: "Oh I see what happened here."
    },
    {
        id: uuid(),
        title: 'Page 150',
        comment: "I knew this was going to happen"
    },
];



//home page, displaying book choices
app.get("/books", (req, res) => {
    // console.log("does this work?")
    res.render("books/index.ejs", { books, newNotes })
})


//note page where you can create notes & questions on the book you are reading.
app.get("/books/note", (req, res) => {
    res.render("books/note.ejs")
})
app.post('/books', (req, res) => {
    const { title, comment } = req.body;
    newNotes.push({ title, comment, id: uuid() })
    res.redirect('/books');
})

//Edit a comment
app.patch('/books/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = newNotes.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/books');
})










app.listen(3000, () => {
    console.log("listening on 3000")
})