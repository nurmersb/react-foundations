import { FunctionComponent } from "react";
import { Book } from "./book";

interface Props {
  books: Book[];
  amountOfBooks: number;
  setAmountOfBooks: (amount: number) => void;
}

const ButtonSection: FunctionComponent<Props> = ({books, amountOfBooks, setAmountOfBooks}: Props) => {

  return (
    <div className='button-section'>
        <button className='aob-btn' onClick={() => setAmountOfBooks(amountOfBooks + 1)}>
          Mehr Bücher
        </button>
        <button className='aob-btn' onClick={() => setAmountOfBooks(amountOfBooks - 1)}>
          Weniger Bücher
        </button>
        <button className='aob-btn' onClick={() => setAmountOfBooks(Math.floor(Math.random() * books.length))}>
          Randomisierte Anzahl der Bücher
        </button>
        <button className='aob-btn' onClick={() => setAmountOfBooks(books.length)}>
          Alle Bücher
        </button>
        <input
          className='aob-input'
          type='number'
          value={amountOfBooks}
          onChange={e => setAmountOfBooks(Math.min(Number(e.target.value), books.length))}
        />
      </div>
  );
};

export default ButtonSection;