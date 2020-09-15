import React from "react";
import styles from './index.module.scss';
import Button from '@components/UI/Button';
import image from './unknown-user.png';

const FriendListItem = props => {
  return (
    <li className={ styles.item }>
      <img src={ props.imgUrl || image } className={ styles.image } alt=""/>
      <div className={ styles.name }>{ props.name }</div>

      <div className={ styles['button-wrapper'] }>
        <Button>Write message</Button>
        <Button>View profile</Button>
      </div>
    </li>
  )
}

export default FriendListItem;