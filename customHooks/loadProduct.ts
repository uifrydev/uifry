import { Data } from "@/Interface/interface";
import sanity from "@/sanity";
import { perProduct } from "@/utils/consts";
import { FC, useEffect, useState } from "react";

export const useLoadProducts = (pageNumber: number, query: string,setCard:React.Dispatch<React.SetStateAction<Data[]>>) => {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function FetchData() {
      const res = await sanity.fetch(query);
      setHasMore(res.length == perProduct);
      setCard((prev) => [...prev, ...res]);
      setLoading(false)
    //   setNoOfProducts((prev) => prev + perProduct);
    }
    FetchData();
    // let cancel
    // axios({
    //   method: 'GET',
    //   url: 'http://openlibrary.org/search.json',
    //   params: { q: query, page: pageNumber },
    //   cancelToken: new axios.CancelToken(c => cancel = c)
    // }).then(res => {
    //   setBooks(prevBooks => {
    //     return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
    //   })
    //   setHasMore(res.data.docs.length > 0)
    //   setLoading(false)
    // }).catch(e => {
    //   if (axios.isCancel(e)) return
    //   setError(true)
    // })
    // return () => cancel()
  }, [pageNumber]);

  return { loading, hasMore,  };
};
