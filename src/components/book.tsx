import { Link } from "react-router";
import "../App.css";
import styled from "styled-components";
interface Props {
  book: Book;
}

export interface Book {
  image?: string;
  isbn13?: string;
  price?: string;
  url?: string;
  subtitle?: string;
  title: string;
}

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;
const StyledSubtitle = styled.h3`
  font-style: italic;
`;
const StyledIsbn = styled.p`
  font-family: monospace;
`;
const StyledPrice = styled.p`
  font-family: serif;
  font-weight: 600;
  font-size: 32px;
`;
const StyledUrl = styled.a`
  font-family: monospace;
  color: #ffffff
`;

const BookItem: React.FC<Props> = ({book}: Props)  =>  {
  return (
    <div className="book-item">
      { 30 > Number(book.price?.slice(1))  && <div className="badge-cheap">CHEAP!!</div>}
      { 30 < Number(book.price?.slice(1))  && <div className="badge-expensive">EXPENSIVE!</div>}
      <div className="bookcover-container">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book-info-container">
        <Link to={`/details/${book.isbn13}`}>
          <StyledTitle>{book.title}</StyledTitle>
        </Link>
        { 
          book.subtitle &&
          <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        }
        <StyledIsbn>ISBN: {book.isbn13}</StyledIsbn>
        <StyledPrice>{book.price}</StyledPrice>
        <StyledUrl href="book.url">{book.url}</StyledUrl>
      </div>
    </div>
  );
}

export default BookItem;

