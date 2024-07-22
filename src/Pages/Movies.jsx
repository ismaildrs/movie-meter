import React, { useEffect, useState } from 'react';
import useFetchData from '../hooks/fetchData';
import Cards from '../components/Cards';

export default function Movies() {
  const listMovies = ['batman', 'attack', 'family', 'morocco'];
  const [data, setData] = useState([]);

  // Fetch data for each movie using useFetchData hook
  const movieData1 = useFetchData(listMovies[0], 'movie', '');
  const movieData2 = useFetchData(listMovies[1], 'movie', '');
  const movieData3 = useFetchData(listMovies[2], 'movie', '');
  const movieData4 = useFetchData(listMovies[3], 'movie', '');

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
        )):<img src="src/assets/spinner.svg"/>}
    </div>
  );
}
