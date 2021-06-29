/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import PopularMovies from '../../types/popularMovies';
import './style.scss';
import Movie from '../../types/movie';

const MoviesList = ({ list, className }: {list : Movie[], className: string }) => (
  <section className={className}>
    <ul>
      {
            list?.length
            && list.map((item : any) => (
              <li key={item.id}>
                <p>{item.title}</p>
              </li>
            ))
          }
    </ul>
  </section>
);

export default MoviesList;
