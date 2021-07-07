import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import List from '../../types/list';

import './style.scss';

const SimilarItems = ({ data }: {data: List[] | undefined}) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
  const { url } = useRouteMatch();
  const type = url.match(/movie/) ? 'movie' : 'tv';
  return (
    <section className="similar-section">
      {
        data?.length
          ? (
            <>
              <h2 className="similar-title">
                You might also like...
              </h2>
              <ul className="similar-list">
                {
                    data.map((item : List) => (
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
