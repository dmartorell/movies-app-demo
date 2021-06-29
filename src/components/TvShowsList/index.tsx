/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';
import TvShow from '../../types/tvShow';

const TvShowsList = ({ list, className }: {list : TvShow[], className: string }) => (
  <section className={className}>
    <ul>
      {
            list?.length
            && list.map((item : any) => (
              <li key={item.id}>
                <p>{item.name}</p>
              </li>
            ))
          }
    </ul>
  </section>
);

export default TvShowsList;
