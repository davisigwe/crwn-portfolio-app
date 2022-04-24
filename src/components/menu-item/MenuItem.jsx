import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.scss';

function MenuItem({ title, imageUrl, size, linkUrl }) {
  return (
    <Link to={linkUrl} className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
}

export default MenuItem;
