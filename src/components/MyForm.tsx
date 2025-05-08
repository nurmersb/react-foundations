import { useForm } from "react-hook-form";
import { BookDetails } from "../API/useDetails";
import { Book } from "./Book";

interface props {
  books: Book[];
  setBooks: (books: BookDetails[]) => void;
}

export const MyForm: React.FC<props> = ({books, setBooks}: props) => {
 const {register, handleSubmit} = useForm<BookDetails>({
    defaultValues:{
      title: "",
      subtitle: "",
      authors: "",
      publisher: "",
    }
  })
  const onSubmit = (data: BookDetails) => {
    console.log(data);
    setBooks( [...books, {image: data.image, title: data.title, subtitle: data.subtitle }] )
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" /><br />
      <input {...register("subtitle")} placeholder="Subtitle" /><br />
      <input {...register("authors")} placeholder="Authors" /><br />
      <input {...register("publisher")} placeholder="Publisher" /><br />
      <button type="submit">Submit</button>
    </form>
  );
};