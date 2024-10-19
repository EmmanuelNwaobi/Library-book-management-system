import renderBook from "./index.js"
let form = document.getElementById("form")
let bookInput = document.getElementById("book")

let bookArray = []

// Fetch books from localStorage before adding a new one
fetchBook()

form.addEventListener("submit", addBook)
function addBook(event){
    event.preventDefault()

    let book = bookInput.value 
    if(book.length === 0){
        alert("Please enter a book title.")
        return
    }

    //Check if book already Exist 
    let bookExist = bookArray.some((item)=> item.bookTitle === book)
    if(bookExist){
        alert('This book already exists in the library.')
        form.reset()
        return
    }

    const bookDetails = {
        bookTitle : book
    }
    bookArray.push(bookDetails)
    localStorage.setItem("bookTitle", JSON.stringify(bookArray))

    form.reset()
    fetchBook()
    renderBook()
}

function fetchBook(){
    if(localStorage.getItem("bookTitle")){
        bookArray = JSON.parse(localStorage.getItem("bookTitle"))
    }
}

export { addBook, fetchBook, bookArray } 