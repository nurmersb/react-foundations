import { FunctionComponent, useContext, useState } from "react";
import { Book } from "./Book";
import ThemeContext from "../Contexts/ThemeContext";

interface Props {
  books: Book[];
  amountOfBooks: number;
  setAmountOfBooks: (amount: number) => void;
  isFormShown: boolean;
  setIsFormShown: (isFormShown: boolean) => void;
}

const ButtonSection: FunctionComponent<Props> = (
  {
    books,
    amountOfBooks,
    setAmountOfBooks,
    isFormShown,
    setIsFormShown,
  }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className='button-section'>
        <button className='aob-btn' onClick={() => {toggleTheme()}}>
          Change Theme (Child Component)
        </button>
        <input
          className='aob-input'
          type='number'
          value={amountOfBooks}
          onChange={e => setAmountOfBooks(Math.min(Number(e.target.value), books.length))}
        />
        < button
          className="aob-btn"
          onClick={() => setIsFormShown(!isFormShown)}
        >
          Open Form
        </button>
      </div>
  );
};

export default ButtonSection;