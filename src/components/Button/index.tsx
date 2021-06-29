/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

type ButtonProps = {
    className: string;
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
  }

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled,
  children,
}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
