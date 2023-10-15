const form = document.querySelector('#formSearch');
const bookSuggestions = document.querySelector("#bookSuggestions")


form.addEventListener('submit', async function (evt) {
    try {
        evt.preventDefault();
        const userInput = form.elements.query.value;
        const config = { params: { q: userInput } }
        const res = await axios.get(`https://openlibrary.org/search.json?q=`, config);
        const bookTitle = res.data.docs[0].title;
        const bookAuthor = res.data.docs[0].author_name[0];
        const bookYear = res.data.docs[0].first_publish_year;
        addSuggestion(bookTitle, bookAuthor, bookYear);
        form.elements.query.value = "";
    } catch (err) {
        console.log(err);
    }
})


const addSuggestion = async function (bookTitle, bookAuthor, bookYear) {
    const newLi = document.createElement('li')
    newLi.textContent = `${bookTitle} by ${bookAuthor} published in ${bookYear}.`;
    bookSuggestions.append(newLi);

}

