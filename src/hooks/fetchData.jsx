import { useState, useEffect } from "react";

const useFetchData = (search = '', type = '', id = '') => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}&type=${type}&s=${search}`);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    setTimeout(()=>{  console.log("this is the first message");}, 10000);
    fetchData();
  }, [search, type, id]);

  return response;
}

export default useFetchData;
