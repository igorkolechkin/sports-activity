import React from 'react';
import styles from './index.module.scss';

const NavItem = props => {
  return <li key={ props.key } className={ styles.nav__item }>{ props.content }</li>
}

export default NavItem;