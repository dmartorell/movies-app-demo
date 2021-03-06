import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import List from '../../types/list';

import 'react-circular-progressbar/dist/styles.css';

const ListComponent = ({ list, category }: {list : List[], category: string}) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
  const defaultPoster = 'https://i.ibb.co/vYbnYLQ/Captura-de-pantalla-2021-07-05-a-las-21-52-36.jpg';
  const handleClick = () => {
    window.localStorage.setItem('YscrollPosition', String(window.scrollY));
  };

  useEffect(() => {
    window.scrollTo(0, Number(window.localStorage.getItem('YscrollPosition')));
  }, []);

  return (
    <section>
      <ul className="list">
        {
            list?.length
            && list.map((item : List) => (
              <li className="list-item" key={item.id}>
                <Link onClick={handleClick} to={`/${category}/${item.id}`}>
                  <img className="list-item__image" src={item.poster_path ? `${IMAGE_URL}${item.poster_path}` : defaultPoster} alt="list-item-pic" />
                  <div className="list-item__info">
                    <p className="info-title">{item.title || item.name}</p>
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
export default ListComponent;
