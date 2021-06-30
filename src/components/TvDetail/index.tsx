/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TvDetail = () => (
  <>
    <h1>tv detail</h1>
    <CircularProgressbar value={5} maxValue={10} text="5" />
  </>
);

export default TvDetail;
