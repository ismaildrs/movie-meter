import { useState, useEffect } from "react";

function useFetchData({search='', type='', id=''}) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=983547a6&i=${id}&type=${type}&s=${search}`);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return response;
}

export default useFetchData;