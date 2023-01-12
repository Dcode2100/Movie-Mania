import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '.././assets/Logo.png';
const Header = () => {
   return (
      <div className="header">
         <div className="headerLeft">
            <Link to="/">
               <img className="header__icon" src={Logo} alt="IMDB" />
            </Link>
            <Link to="/movies/popular" style={{ textDecoration: 'none' }}>
               <span>Popular</span>
            </Link>
            <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}>
               <span>Top Rated</span>
            </Link>
            <Link to="/movies/upcoming" style={{ textDecoration: 'none' }}>
               <span>Upcoming</span>
            </Link>
         </div>
      </div>
   );
};

export default Header;
