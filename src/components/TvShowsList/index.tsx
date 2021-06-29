/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';
import TvShow from '../../types/tvShow';

const TvShowsList = ({ list }: {list : TvShow[] }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <section>
      <ul className="list">
        {
            list?.length
            && list.map((item : any) => (
              <li className="list-item" key={item.id}>
                <img className="list-item__image" src={`${IMAGE_URL}${item.poster_path}`} alt="list-item-pic" />
                <p className="list-item__title">{item.name}</p>
                <p className="list-item__vote-average">{item.vote_average}</p>
              </li>
            ))
          }
      </ul>
    </section>
  );
};

export default TvShowsList;
