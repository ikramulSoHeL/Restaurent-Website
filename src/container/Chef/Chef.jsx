import React from 'react';

import './Chef.css';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section_padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Loren ipsum dfdf  ddfdf gfdgdf dfgdfg ggd fgdfgdfg dfgdfg gdfgdfg gdfgdgr jyjt htrhr t </p>
        </div>

        <p className='p__opensans'></p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & FOunder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
