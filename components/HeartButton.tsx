'use client';
import { useRouter } from 'next/navigation';

const HeartButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/favorites');
  };

  return <button className="heart-button" onClick={handleClick}></button>;
};

export default HeartButton;
