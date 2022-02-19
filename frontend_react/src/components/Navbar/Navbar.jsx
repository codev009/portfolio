import React from 'react';

import { images } from '../../constants';
import './Navbar.scss';
const Navbar = () => {
    return (
      <nav>
          <div>
              <img src={images.logo} alt="logo"/>
          </div>
          <ul>
              {['home', 'about', 'contact','work', 'skills', 'testimonial']}.map(() => {})
          </ul>
      </nav>
        );
}

export default Navbar;