import sanity from "@/sanity";
import { useEffect, useState } from "react";

const useDebouncedSearch = (searchTerm: string, delay = 500) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async (term: string) => {
      if (term !== "") {
        const query = `*[_type == 'product' && title match '${term}*']`;
        const data = await sanity.fetch(query);
        setResults(data);
      } else {
        setResults([]);
      }
    };

    const timeoutId = setTimeout(() => fetchResults(searchTerm), delay);

    // Cleanup function to cancel the setTimeout when searchTerm changes or component unmounts
    return () => clearTimeout(timeoutId);
  }, [searchTerm, delay]);

  return results;
};

export default useDebouncedSearch;
