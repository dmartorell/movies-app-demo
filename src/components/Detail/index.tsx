import React, { useEffect } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { loadDetail, loadSimilarItems } from '../../redux/actions/actionCreators';
import Button from '../Button';
import { getYearFromDate, getAverageRunTime } from '../../helpers/commonHelpers';
import Store from '../../types/store';
import SimilarItems from '../SimilarItems';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss';

const Detail = () => {
  const { id } = (useParams<{id: string}>());
  const selectedItem = useSelector((store: Store) => store.selectedItem);
  const similarItems = useSelector((store: Store) => store?.similarItems?.results?.slice(0, 9));
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const type = url.match(/movie/) ? 'movie' : 'tv';
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
  const defaultPoster = 'https://i.ibb.co/vYbnYLQ/Captura-de-pantalla-2021-07-05-a-las-21-52-36.jpg';

  useEffect(() => {
    dispatch((loadDetail({ id, type })));
    dispatch(loadSimilarItems({ id, type }));
  }, [id]);

  return (
    <>
      <section className="detail">
        <img
          className="detail__background"
          src={selectedItem.backdrop_path ? `${IMAGE_URL}${selectedItem.backdrop_path}` : defaultPoster}
          alt="background-img"
        />
        <Button className="detail__go-back main-btn" disabled={false} onClick={() => history.push(`/${type}`)}>Back to List</Button>
        <img className="detail__poster" src={selectedItem.poster_path ? `${IMAGE_URL}${selectedItem.poster_path}` : defaultPoster} alt="background-img" />
        <h1 className="detail__title">{selectedItem.title || selectedItem.name}</h1>
        <CircularProgressbar className="detail__rating" value={selectedItem.vote_average} maxValue={10} text={`${selectedItem.vote_average}`} />
        <ul className="detail__info">
          <li>
            <p className="length-title">Length</p>
            <p className="length">
              {selectedItem.runtime || getAverageRunTime(selectedItem.episode_run_time)}
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
