import React from 'react';
import styles from './index.module.scss';

const Button = props => {
  const { className, onClick, ...attrs } = props;

  return (
    <button
      className={ [ styles.btn, className ].join(' ') }
      onClick={ onClick }
      { ...attrs }
    >
      { props.children }
    </button>
  )
};

export default Button;
