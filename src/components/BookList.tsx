import { FunctionComponent } from "react";
import BookItem, { Book } from "./book";
import "../App.css";

interface Props {
  books: Book[];
  amountOfBooks: number;
}

const BookList: FunctionComponent<Props> = ({books, amountOfBooks}: Props) => {

  return (
    //return muss immer nur einen element zurückliefern. also alles in einen div reinpacken
    <div className='book-list-container'>
      <div className='book-list'>
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
