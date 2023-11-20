'use client';
import Image from 'next/image';
import { CustomeButton } from '.';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="hero__title">
          ARE YOU LOOKING FOR A CHARITY TO SUPPORT?
        </h1>
        <p className="hero__subtitle">
          "Charity is the soothing symphony of the soul, where every act of
          kindness echoes the melody of helping others, harmonizing humanity in
          a world of compassion and love."
        </p>
        <a
          href="https://www.every.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomeButton
            title="Explore Charities"
            containerStyles="bg-custom-green text-white rounded-full mt-10"
          />
        </a>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/charity.jpg" alt="charity" width={1000} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
