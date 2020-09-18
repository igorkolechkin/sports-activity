import React from 'react';

const Image = props => {
  return (
    <img src={ props.src }
         alt={ props.alt }
         className={ typeof props.className === 'string' ? props.className : props.className.join(' ') }
         { ...props.attrs }
    />
  )
}

export default Image;