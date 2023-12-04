export default function Book({book}){
    const {name, price} = book;
    return(
        <div>
            <h3>Book Name: {name}</h3>
            <h3>Book Price: {price}</h3>
            <h3>Book Id: {book.id}</h3>
        </div>
        
    )
}