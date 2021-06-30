import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { loadDetail } from '../../redux/actions/actionCreators';
import Store from '../../types/store';

import './style.scss';

const Detail = () => {
  const { id } = (useParams<{id: string}>());
  const selectedItem = useSelector((store: Store) => store.selectedItem);
  const dispatch = useDispatch();
  const type = window.location.pathname.split('/')[1];

  useEffect(() => {
    dispatch((loadDetail({ id, type })));
  }, []);

  return (
    <>
      <h1>{selectedItem.title || selectedItem.name}</h1>
      <CircularProgressbar className="progress" value={selectedItem.vote_average} maxValue={10} text={`${selectedItem.vote_average}`} />
    </>
  );
};

export default Detail;
