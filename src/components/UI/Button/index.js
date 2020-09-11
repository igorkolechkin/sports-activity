import React from 'react';
import styles from './index.module.scss';

const Button = props => {
  return (
    <button
      className={ styles.btn + ' '+ props.clases }
      onClick={ props.onClick }
      disabled={ props.disabled } >
      { props.children }
    </button>
  )
};

export default Button;
