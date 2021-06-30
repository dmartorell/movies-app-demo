import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { loadDetail, loadSimilarItems } from '../../redux/actions/actionCreators';
import getTypeFromLocation from '../../helpers/getTypeFromLocation';
import getYearFromDate from '../../helpers/getYearFromDate';
import Store from '../../types/store';
import SimilarItems from '../SimilarItems';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss';

const Detail = () => {
  const { id } = (useParams<{id: string}>());
  const selectedItem = useSelector((store: Store) => store.selectedItem);
  const similarItems = useSelector((store: Store) => store?.similarItems?.results?.slice(0, 9));
  const dispatch = useDispatch();
  const type = getTypeFromLocation();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    dispatch((loadDetail({ id, type })));
    dispatch(loadSimilarItems({ id, type }));
  }, [id]);

  return (
    <>
      <section className="detail">
        {
        selectedItem.backdrop_path
        && (
        <img
          className="detail__background"
          src={`${IMAGE_URL}${selectedItem.backdrop_path}`}
          alt="background-img"
        />
        )
      }
        <img className="detail__poster" src={`${IMAGE_URL}${selectedItem.poster_path}`} alt="background-img" />
        <h1 className="detail__title">{selectedItem.title || selectedItem.name}</h1>
        <CircularProgressbar className="detail__rating" value={selectedItem.vote_average} maxValue={10} text={`${selectedItem.vote_average}`} />
        <ul className="detail__info">
          <li>
            <p className="length-title">Length</p>
            <p className="length">
              {selectedItem.runtime || selectedItem.episode_run_time}
              {' '}
              min
            </p>
          </li>
          <li>
            <p className="language-title">Language</p>
            <p className="language">
              {selectedItem.original_language}
            </p>
          </li>
          <li>
            <p className="year-title">Year</p>
            <p className="year">
              {getYearFromDate(selectedItem.release_date)
            || getYearFromDate(selectedItem.first_air_date)}
            </p>
          </li>
        </ul>
        <p className="story-line-text">
          {selectedItem.overview}
        </p>
      </section>
      <SimilarItems data={similarItems} />
    </>
  );
};

export default Detail;
