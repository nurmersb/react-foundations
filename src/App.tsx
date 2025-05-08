import "./App.css";
import BookList from "./components/BookList";
import ButtonSection from "./components/ButtonSection";
import NoBooks from "./components/NoBooks";
import useBooks from "./API/useBooks";
import { useContext } from "react";
import ThemeContext from "./Contexts/ThemeContext";

function App() {
  const { loading, books, amountOfBooks, setAmountOfBooks } = useBooks();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='App'>
      
        <header className='App-header'>
          <h1 className='App-title'>Books</h1>
          <button className='aob-btn' onClick={() => {toggleTheme()}}>
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
            />
            {amountOfBooks > 0 ? <BookList books={books} amountOfBooks={amountOfBooks} /> : <NoBooks />}
          </div>
        )}
    </div>
  );
}

export default App;
