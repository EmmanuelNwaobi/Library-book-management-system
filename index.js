import { addBook, fetchBook, bookArray } from "./addBook.js";
import removeBook from "./removeBook.js";

let bookContainer = document.getElementById("book-container")

function renderBook(){
    bookContainer.innerHTML = ""
    if(bookArray.length === 0){
        bookContainer.style.display = "none"
    }else{
        bookContainer.style.display = "flex"
    }

    // Create the book elements and render them
    bookArray.forEach((item, index)=>{
        let bookInfo = item.bookTitle

        let mainContainerDiv = document.createElement("div")
        mainContainerDiv.classList.add("book-title-and-remove-container")

        let bookTitleDiv = document.createElement("div")
        bookTitleDiv.classList.add("book-title")

        let bookText = document.createElement("p")
        bookText.textContent = bookInfo
        bookTitleDiv.append(bookText)

        let removeContainerDiv = document.createElement("div")
        removeContainerDiv.classList.add("remove-container")

        let removeBtn = document.createElement("button")
        removeBtn.classList.add("remove-btn")
        removeBtn.textContent = "Remove"
        // Attach remove functionality
        removeBtn.addEventListener("click", ()=>{
            const updatedBooks = removeBook(bookArray, bookInfo)
            
            localStorage.setItem("bookTitle", JSON.stringify(updatedBooks)) // Save updated array
            fetchBook()
            renderBook() // re-render after removal
        })


        removeContainerDiv.append(removeBtn)
        mainContainerDiv.append(bookTitleDiv, removeContainerDiv)
        bookContainer.append(mainContainerDiv)
    })
}
renderBook()

export default renderBook