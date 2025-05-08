import { FunctionComponent, useContext } from "react";
import BookItem, { Book } from "./Book";
import "../App.css";
import ThemeContext, { Themes } from "../Contexts/ThemeContext";

interface Props {
  books: Book[];
  amountOfBooks: number;
}

const BookList: FunctionComponent<Props> = ({books, amountOfBooks}: Props) => {
  const themeContext = useContext(ThemeContext);

  return (
    //return muss immer nur einen element zurückliefern. also alles in einen div reinpacken

    <div className = {themeContext.theme === Themes.light ? 'book-list-container light' : 'book-list-container'}>
      <div className = 'book-list'>
        {
          books.length === 0
          && <div className="no-books">No books found</div>
        }
        {
          books.length > 0
          && books?.slice(0, amountOfBooks).map(
              (book: Book, idx: number) => <BookItem book={book} key={idx} />
            )
        }
      </div>
    </div>
  );
};

export default BookList;
