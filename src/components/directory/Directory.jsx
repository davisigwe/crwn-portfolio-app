import React from 'react';
import { useSelector } from 'react-redux';

import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';

function Directory() {
  const data = useSelector((state) => state.directory.sections);
  return (
    <div className="directory-menu">
      {data.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title.toLocaleUpperCase()}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
}

export default Directory;
