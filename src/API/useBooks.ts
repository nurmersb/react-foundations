import { useState, useEffect } from "react";
import { Book } from "../components/Book";

const useBooks = () => {
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

  return { loading, books, setBooks, amountOfBooks, setAmountOfBooks };
}

export default useBooks;