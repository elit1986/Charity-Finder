'use client';

import { MouseEventHandler } from 'react';

export interface CustomeButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

const CustomeButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomeButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles} `}
        onClick={() => {
          handleClick;
        }}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default CustomeButton;
