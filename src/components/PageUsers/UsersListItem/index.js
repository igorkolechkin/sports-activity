import React from 'react';
import styles from './index.module.scss';
import Button from '@components/UI/Button';
import image from './unknown-user.png';

const UsersListItem = props => {
  return (
    <li className={ styles['item-wrapper'] }>
      <div className={ styles.item }>
        <div className={ styles['image-wrapper'] }>
          <img src={ props.imgUrl || image } className={ styles.image } alt=""/>
        </div>
        <div className={ styles.name }>{ props.name }</div>

        <div className={ styles['button-wrapper'] }>
          <Button>Followed</Button>
          <Button>Send</Button>
        </div>
      </div>
    </li>
  )
}

export default UsersListItem;