import { useForm } from "react-hook-form";
import { BookDetails } from "../API/useDetails";
import { Book } from "./Book";
import styled from "styled-components";

interface props {
  books: Book[];
  setBooks: (books: BookDetails[]) => void;
}

const ErrorMessage = styled.div`
  color: red;
`;

export const MyForm: React.FC<props> = ({books, setBooks}: props) => {
 const {register, handleSubmit, formState: {errors}} = useForm<BookDetails>({
    defaultValues:{
      title: "",
      subtitle: "",
      authors: "",
      publisher: "",
    }
  })
  const onSubmit = (data: BookDetails) => {
    console.log(data);
    setBooks( [{image: data.image, title: data.title, subtitle: data.subtitle }, ...books] )
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", {required: true, minLength: 3, maxLength: 20})} placeholder="Title" /><br />
      {errors.title?.type === "required" && <ErrorMessage>This field is required</ErrorMessage>}
      {errors.title?.type === "minLength" && <ErrorMessage>Title must be at least 3 characters</ErrorMessage>}
      {errors.title?.type === "maxLength" && <ErrorMessage>Title must be at most 20 characters</ErrorMessage>}
      <input {...register("subtitle")} placeholder="Subtitle" /><br />
      <input {...register("authors", {
        required: true,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Author should only consist of letters and spaces"
          }
        })
      } placeholder="Authors" /><br />
      {errors.authors?.type === "required" && <ErrorMessage>This field is required</ErrorMessage>}
      {errors.authors?.type === "pattern" && <ErrorMessage>Author should only consist of letters and spaces</ErrorMessage>}
      <input {...register("publisher")} placeholder="Publisher" /><br />
      <button type="submit">Submit</button>
    </form>
  );
};