import React, { useEffect, useState } from 'react';
import useFetchData from '../hooks/fetchData';

export default function MovieInfos({ id }) {
  const [data, setData] = useState(null);
  const response = useFetchData({ id });
  console.log(response);

  useEffect(() => {
    if (response) {
      setData(response);
    }
  }, [response]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-2 md:mx-5 lg:mx-7 my-20 p-6 bg-gradient-to-br from-black/100 to-black/15 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <img src={data.Poster} alt={data.Title} className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{data.Title}</h1>
          <p className="text-gray-600 mb-4">{data.Year} • {data.Rated} • {data.Runtime}</p>
          <p className="mb-4"><span className="font-semibold">Genre:</span> {data.Genre}</p>
          <p className="mb-4"><span className="font-semibold">Director:</span> {data.Director}</p>
          <p className="mb-4"><span className="font-semibold">Writers:</span> {data.Writer}</p>
          <p className="mb-4"><span className="font-semibold">Actors:</span> {data.Actors}</p>
          <p className="mb-4"><span className="font-semibold">Plot:</span> {data.Plot}</p>
          <p className="mb-4"><span className="font-semibold">Language:</span> {data.Language}</p>
          <p className="mb-4"><span className="font-semibold">Country:</span> {data.Country}</p>
          <p className="mb-4"><span className="font-semibold">Awards:</span> {data.Awards}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Ratings</h2>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-black">IMDb Rating</p>
              <p className="text-xl text-black">{data.imdbRating}/10</p>
              <p className="text-sm text-gray-600">{data.imdbVotes} votes</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-black">Metascore</p>
              <p className="text-xl text-gray-600">{data.Metascore}/100</p>
            </div>
          </div>
          {data.Ratings.map((rating, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-black">{rating.Source}</p>
                <p className="text-xl text-gray-600">{rating.Value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Additional Information</h2>
        <p><span className="font-semibold">Box Office:</span> {data.BoxOffice}</p>
        <p><span className="font-semibold">Production:</span> {data.Production}</p>
        <p><span className="font-semibold">Website:</span> {data.Website !== "N/A" ? <a href={data.Website} className="text-blue-600 hover:underline">{data.Website}</a> : "N/A"}</p>
      </div>
    </div>
  );
}