/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MovieDetail = () => (
  <>
    <h1>movie detail</h1>
    <CircularProgressbar value={7.3} maxValue={10} text="7.3" />
  </>
);

export default MovieDetail;
