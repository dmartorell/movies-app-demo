import React from 'react';
import './style.scss';

const NotFound = () => {
  const image404 = 'https://i.ibb.co/bNw7Y57/404.png';
  return (
    <section className="section-404">
      <img className="section-404__image" src={image404} alt="404 pic" />
      <h1 className="section-404__message">Oops, wrong door... but you can dance!</h1>
    </section>
  );
};

export default NotFound;
