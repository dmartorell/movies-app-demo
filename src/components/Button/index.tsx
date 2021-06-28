/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

type ButtonProps = {
    className: string;
    children: React.ReactNode;
    onClick: () => void;
  }

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
