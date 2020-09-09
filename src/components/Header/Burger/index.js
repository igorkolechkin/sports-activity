import React from 'react';
import styles from './index.module.scss'

const Burger = props => {
  return (
    <button
      onClick={ props.onToggleHeader }
      className={ `${styles.burger} ${props.showHeader ? styles.show : ''}` }>
      <span />
    </button>
  )
}

export default Burger;