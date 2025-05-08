import { useEffect, useState } from "react"

export interface BookDetails {
  error?: string;
  title: string;
  subtitle?: string;
  authors?: string;
  publisher?: string;
  language?: string;
  isbn10?: string;
  isbn13?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  price?: string;
  image?: string;
  url?: string;
}

export const useDetails =  (isbn: string) => {
  const [details, setDetails] = useState<BookDetails | null>(null);

   useEffect(() => {
      fetch(`https://api.itbook.store/1.0/books/${isbn}`)
         .then(response => {
            if (response.ok) {
               response.json()
                .then( (details: BookDetails) =>
                  setDetails(details)
                )
            }
         })
   }
   , [])

  return details;
  }
