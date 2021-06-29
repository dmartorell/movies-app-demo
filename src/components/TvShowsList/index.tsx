/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import '../MoviesList/style.scss';
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
                <Link to={`/tv/${item.id}`}>
                  <img className="list-item__image" src={`${IMAGE_URL}${item.poster_path}`} alt="list-item-pic" />
                  <div className="list-item__info">
                    <p className="info-title">{item.name}</p>
                    <p className="info-votes">
                      rating:
                      {' '}
                      {item.vote_average}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          }
      </ul>
    </section>
  );
};

export default TvShowsList;
