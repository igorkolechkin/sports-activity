import React from 'react';
import styles from './index.module.scss';

const UsersNavItem = props => {
  return (
      <li className={ styles.item }
          onClick={ e => props.onCheckUser(e.target.dataset.userid) }
          data-userid={ props.id }
      >{ props.name }</li>
  )
}

export default UsersNavItem;