import Book from "./Book"

export default function Bookstore({books}){
    console.log(books);
    return(
        <div>
            <h3>Books:{books.length} </h3>
            {
                books.map(book=><Book key={book.id} book={book}></Book>)
            }
        </div>
    )
}