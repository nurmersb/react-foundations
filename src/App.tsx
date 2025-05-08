import "./App.css";
import BookList from "./components/BookList";
import ButtonSection from "./components/ButtonSection";
import NoBooks from "./components/NoBooks";
import useBooks from "./API/useBooks";
import { useContext, useState } from "react";
import ThemeContext from "./Contexts/ThemeContext";
import { MyForm } from "./components/MyForm";

function App() {
  const { loading, books, setBooks, amountOfBooks, setAmountOfBooks } = useBooks();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Books</h1>
        <button
          className='aob-btn'
          onClick={() => {
            toggleTheme();
          }}
        >
          Change Theme
        </button>
      </header>
      {loading ? (
        <div className='spinner-container'>
          <div className='spinner' />
        </div>
      ) : (
        <div>
          <ButtonSection
            books={books}
            amountOfBooks={amountOfBooks}
            setAmountOfBooks={val => {
              setAmountOfBooks(val);
            }}
            isFormShown={false}
            setIsFormShown={val => {
              setIsFormShown(val);
            }}
          />
          {isFormShown && <MyForm books={books} setBooks={setBooks}/>}
          {amountOfBooks > 0 ? <BookList books={books} amountOfBooks={amountOfBooks} /> : <NoBooks />}
        </div>
      )}
    </div>
  );
}

export default App;
