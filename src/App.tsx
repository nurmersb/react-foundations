import "./App.css";
import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import { Book } from "./components/book";
import ButtonSection from "./components/ButtonSection";
import NoBooks from "./components/noBooks";

function App() {

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [amountOfBooks, setAmountOfBooks] = useState<number>(0);

    useEffect(() => {
      fetch('https://api.itbook.store/1.0/new')
      .then(response => {
        if (response.ok) {
          response.json().then(
            data => {
              setBooks(data.books)
              setAmountOfBooks(data.books.length)
          })
        }
      }).finally(() => {
        setLoading(false)
      })
    }, []);

  return (
    <div className='App'>
      <header className='App-header'/>
      {
        loading
        ? 
          <div className="spinner-container">
            <div className="spinner"/>
          </div>
        :
          <div>
            <ButtonSection
              books={books}
              amountOfBooks={amountOfBooks}
              setAmountOfBooks={(val) => {setAmountOfBooks(val)}}
            />
            {
            amountOfBooks > 0
            ?
              <BookList
                books={books}
                amountOfBooks={amountOfBooks}
              />
            :
              <NoBooks/>
            }
          </div>
      }
    </div>
  );
}

export default App;
