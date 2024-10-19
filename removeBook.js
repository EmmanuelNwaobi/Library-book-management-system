
function removeBook(bookArray, bookTitle){
    // Filter out the book by its title
    const updatedBooks = bookArray.filter((item)=> item.bookTitle !== bookTitle)

    // Re-render the updated book list
    return updatedBooks // return updated array
}

export default removeBook