import React from 'react';
import styles from './index.module.scss';
import { NavLink  } from 'react-router-dom';

const NavItem = props => {
  return (
    <li className={ styles.item }>
      <NavLink exact={ props.exact }
               to={ props.href }
               className={ styles.link }
               activeClassName={ styles.active }
      >{ props.content }</NavLink>
    </li>
  )
}

export default NavItem;