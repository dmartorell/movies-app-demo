/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';
import Movie from '../../types/movie';

const MoviesList = ({ list }: {list : Movie[]}) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <section>
      <ul className="list">
        {
            list?.length
            && list.map((item : any) => (
              <li className="list-item" key={item.id}>
                <img className="list-item__image" src={`${IMAGE_URL}${item.poster_path}`} alt="list-item-pic" />
                <div className="list-item__info">
                  <p className="info-title">{item.title}</p>
                  <p className="info-votes">{item.vote_average}</p>
                </div>
              </li>
            ))
          }
      </ul>
    </section>
  );
};

export default MoviesList;
