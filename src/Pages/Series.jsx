import React, { useEffect, useState } from 'react';
import useFetchData from '../hooks/fetchData';
import Cards from '../components/Cards';

export default function Series() {
  const listMovies = ['superman', 'gym', 'military', 'sport'];
  const [data, setData] = useState([]);

  // Fetch data for each movie using useFetchData hook
  const movieData1 = useFetchData(listMovies[0], 'series', '');
  const movieData2 = useFetchData(listMovies[1], 'series', '');
  const movieData3 = useFetchData(listMovies[2], 'series', '');
  const movieData4 = useFetchData(listMovies[3], 'series', '');

  useEffect(() => {
    let allMoviesData = [];
    if (movieData1 && movieData2 && movieData3 && movieData4) {
      allMoviesData = [
        ...(movieData1.Search || []),
        ...(movieData2.Search || []),
        ...(movieData3.Search || []),
        ...(movieData4.Search || []),
      ];
    }
    setData(allMoviesData);
  }, [movieData1, movieData2, movieData3, movieData4]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='mt-32 flex gap-5 flex-wrap mx-5 justify-center'>
      
      {data.length?
        data.map((item) => (
          <Cards
            key={item.imdbID}
            title={item.Title}
            logoUrl={item.Poster}
            id={item.imdbID}
          />
        )):       <img src="src/assets/spinner.svg"></img>
      }
    </div>
  );
}
