import { FunctionComponent, useEffect, useState } from "react";
import BookItem from "./book";
import NoBooks from "./noBooks";
import '../App.css';

export interface Book {
  image?: string;
  isbn13?: string;
  price?: string;
  url?: string;
  subtitle?: string;
  title: string;
}

const BookList: FunctionComponent = () => {
  
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [amountOfBooks, setAmountOfBooks] = useState<number>(0);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
    .then(response => {
      if (response.ok) {
        response.json().then(
          data => {
            console.log("response books", data.books)
            setBooks(data.books)
            setAmountOfBooks(data.books.length)
        })
      }
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  return (
    //return muss immer nur einen element zurückliefern. also alles in einen div reinpacken
    <div className="book-list-container">
      {
        loading ? 
          <div className="spinner-container">
            <div className="spinner" style={{
              border: '6px solid #f3f3f3',
              borderTop: '6px solid #3498db',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              animation: 'spin 1s linear infinite'
            }} />
          </div>
        :
          <div className="button-section">
            <button className="aob-btn" onClick={() => setAmountOfBooks(amountOfBooks + 1)}>
              Mehr Bücher
            </button>
            <button className="aob-btn" onClick={() => setAmountOfBooks(amountOfBooks - 1)}>
              Weniger Bücher
            </button>
            <button className="aob-btn" onClick={() => setAmountOfBooks(Math.floor(Math.random() * books.length))}>
              Randomisierte Anzahl der Bücher
            </button>
            <button className="aob-btn" onClick={() => setAmountOfBooks(books.length)}>
              Alle Bücher
            </button>
            <input
              className="aob-input"
              type="number"
              value={amountOfBooks}
              onChange={(e) => setAmountOfBooks(
                Math.min(Number(e.target.value), books.length)
              )}
            />
          </div>
      }
      <div className="book-list">
        {(
          amountOfBooks > 0 && books 
            ? 
              books.slice(0, amountOfBooks).map((book, idx) => (
                <BookItem book={book} key={idx} />
              ))
            :
            !loading && <NoBooks /> 
        )}
      </div>
    </div>
  );
};


export default BookList;