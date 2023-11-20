'use client';
import { CustomeButtonProps } from '@/types';

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
