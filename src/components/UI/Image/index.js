import React from 'react';

const Image = props => {
  const { className, alt, ...attrs } = props;

  return (
    <img { ...attrs }
         alt={ alt || 'image' }
         className={ typeof className === 'string' ? className : className.join(' ') } />
  )
}

export default Image;