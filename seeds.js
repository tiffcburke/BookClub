const Book = require('./models/book');
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/alphaBookClub', { useNewUrlParser: true })
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("Oh no mongo connection error!")
        console.log(err)
    })


// const b = new Book({
//     title: "Forth Wing",
//     recommendedBy: "Kate",
//     description: " Fourth Wing is the inaugural novel in the Empyrean series by Rebecca Yarros, weaving a compelling narrative around Violet Sorrengail, a young cadet training to become a dragon rider amidst a harsh, competitive environment."
// })

// b.save().then(b => {
//     console.log(b)
// })
//     .catch(err => {
//         console.log(err)
//     })

const seedBooks = [
    {
        title: "Tomorrow Tomorrow Tomorrow",
        recommendedBy: "Mia",
        description: "The story is essentially about gamers and video games, throwing up constant references to the history of gaming and gaming culture. The two main characters, Sadie and Sam, bond over playing video games when the pair meet in the children's ward of a hospital and later conceive of, and program, games of their own."
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        recommendedBy: "Kellyn",
        description: "On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry. Harry discovers that not only is he a wizard, but he is a famous one. He meets two best friends, Ron Weasley and Hermione Granger, and makes his first enemy, Draco Malfoy."
    },
    {
        title: "The Berry Pickers",
        recommendedBy: "Bobby",
        description: "A profoundly moving novel told from the alternating point of view of two siblings, this is the story of a Mi’kmaq girl gone missing and the lasting effect it has on her family. Inspired by family stories and written in exacting prose, this gorgeous narrative will linger long after you put it down."
    },
    {
        title: "Powerless",
        recommendedBy: "Mike",
        description: "Fans of Sarah J. Maas are swooning over this new YA romantasy. Featuring a powerful prince and an ordinary girl in a post-plague world full of magic this fantasy novel has everything from action to romance."
    }

]

Book.insertMany(seedBooks)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        consolge.log(err)
    })