import { useParams } from "react-router";
import { BookDetails, useDetails } from "../API/useDetails";

export const DetailPage: React.FC = () => {
   const { isbn } = useParams<{ isbn: string }>();
   const  details: BookDetails | null = useDetails(isbn!);
  return (
    <div className="detail-page">
      <h1>Detail Page</h1>
      <h2>{details?.title}</h2>
       { 
        details?.subtitle && 
          <h3>{details?.subtitle}</h3> 
      }
      <div>
        Authors: {details?.authors}<br />
        Publisher: {details?.publisher}<br />
        Language: {details?.language}<br />
        ISBN10: {details?.isbn10}<br />
        ISBN13: {details?.isbn13}<br />
        Pages: {details?.pages}<br />
        Year: {details?.year}<br />
        Rating: {details?.rating}<br />
        Desc: {details?.desc}<br />
        Price: {details?.price}<br />
        URL: {details?.url}
      </div>
    </div>
  );
}