import React from 'react';
import banner from '../../../images/R.jfif';

const Banner = () => {
  return (
    <div className='h-80 w-full'>
      <img
        src={banner}
        alt='banner'
        className='w-full h-full object-cover object-center'
      />
    </div>
  );
};

export default Banner;