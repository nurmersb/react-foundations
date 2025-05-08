import "./App.css";
import BookList from "./components/BookList";
import ButtonSection from "./components/ButtonSection";
import NoBooks from "./components/NoBooks";
import useBooks from "./API/useBooks";

function App() {
  const { loading, books, amountOfBooks, setAmountOfBooks } = useBooks();

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
