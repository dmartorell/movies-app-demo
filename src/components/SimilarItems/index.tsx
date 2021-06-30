import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../../types/movie';
import getTypeFromLocation from '../../helpers/getTypeFromLocation';

import './style.scss';

const SimilarItems = ({ data }: {data: Movie[]}) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
  const type = getTypeFromLocation();

  return (
    <section>
      {
        data?.length
          ? (
            <>
              <h2 className="similar-title">
                You might also like...
              </h2>
              <ul className="similar-list">
                {
                    data.map((item : Movie) => (
                      <li className="similar-item" key={item.id}>
                        <Link to={`/${type}/${item.id}`}>
                          <img className="similar-item__poster" src={`${IMAGE_URL}${item.poster_path}`} alt="poster" />
                        </Link>
                      </li>
                    ))
                }
              </ul>
            </>
          )
          : null
        }
    </section>
  );
};

export default SimilarItems;
