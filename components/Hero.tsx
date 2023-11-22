'use client';
import Image from 'next/image';
import { CustomeButton } from '.';

const Hero = () => {
  return (
    <div className="parent__container">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="hero__title tracking-widest">
          ARE YOU LOOKING FOR A CHARITY TO SUPPORT?
        </h1>
        <p className="hero__subtitle tracking-wider">
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
            title="EXPLORE CHARITIES"
            containerStyles="bg-specialGreen text-white rounded-full mt-10 tracking-widest"
          />
        </a>
      </div>
      <div className="hero__image-container">
        <div className="image__container">
          <Image
            src="/charity.jpg"
            alt="charity"
            layout="responsive"
            width={1000}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
