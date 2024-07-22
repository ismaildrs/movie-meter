import React from 'react';
import { useParams } from 'react-router-dom';
import MovieInfos from '../components/MovieInfos';

export default function MovieSerie() {
  const { id } = useParams();

  return (
    <div>
        <MovieInfos id={id} />
    </div>
  );
}
