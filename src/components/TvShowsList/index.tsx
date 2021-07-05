import React from 'react';
import { Link } from 'react-router-dom';
import '../MoviesList/style.scss';
import TvShow from '../../types/tvShow';

const TvShowsList = ({ list }: {list : TvShow[] }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
  const defaultPoster = 'https://i.ibb.co/vYbnYLQ/Captura-de-pantalla-2021-07-05-a-las-21-52-36.jpg';
  return (
    <section>
      <ul className="list">
        {
            list?.length
            && list.map((item : TvShow) => (
              <li className="list-item" key={item.id}>
                <Link to={`/tv/${item.id}`}>
                  <img className="list-item__image" src={item.poster_path ? `${IMAGE_URL}${item.poster_path}` : defaultPoster} alt="list-item-pic" />
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
