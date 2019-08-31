import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Logo.module.css';

const smallestLogo =
  'https://res.cloudinary.com/dw1omslee/image/upload/c_scale,w_50/v1567267475/Lumen/Lumen-logo-mobile_lgjgq7.png';
// const slightLargeLogo = 'https://res.cloudinary.com/dw1omslee/image/upload/c_scale,w_100/v1567267475/Lumen/Lumen-logo-mobile_lgjgq7.png';
const mediumLogo =
  'https://res.cloudinary.com/dw1omslee/image/upload/c_scale,w_100/v1567267732/Lumen/logo-full_hozy1u.png';
// const largeLogo = 'https://res.cloudinary.com/dw1omslee/image/upload/c_scale,w_200/v1567267732/Lumen/logo-full_hozy1u.png';
// const hugeLogo = 'https://res.cloudinary.com/dw1omslee/image/upload/c_scale,w_300/v1567267732/Lumen/logo-full_hozy1u.png';

const logo = () => (
  <NavLink to="/">
    <div className={classes.Logo}>
      <img
        src={smallestLogo}
        className={classes.image_mobile}
        alt="Lumen Logo"
      />
      <img src={mediumLogo} className={classes.image_full} alt="Lumen Logo" />
    </div>
  </NavLink>
);

export default logo;
