import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import useFetchData from '../hooks/fetchData';

export default function Body({title, search, type}) {
  const [data, setData] = useState(null);
  const response = useFetchData(search, type);

  useEffect(() => {
    if (response && response.Search) {
      setData(response.Search);
    }
  }, [response]);

  return (
      <div className='relative flex flex-col  items-center gap-5 w-full px-5 py-10'>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold pb-5 bg-gradient-to-r from-purple-600 to-pink-500 inline-block text-transparent bg-clip-text'>{title}</h1>
        <div className='flex gap-5 flex-wrap justify-center'>
          
          {data ? data.map((elem) => (
            <Cards key={elem.imdbID} title={elem.Title} logoUrl={elem.Poster} id={elem.imdbID} />
          )):<img src="src/assets/spinner.svg"></img>}
        </div>
      </div>
  );
}