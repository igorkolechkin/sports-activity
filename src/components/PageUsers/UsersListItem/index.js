import React from 'react';
import { NavLink  } from 'react-router-dom';
import styles from './index.module.scss';
import Button from '@components/UI/Button';
import Image from '@components/UI/Image';

const UsersListItem = props => {
  return (
    <li className={ styles['item-wrapper'] }>
      <div className={ styles.item }>

        <NavLink to={ `profile/${props.href}` }
                 className={ styles.imageWrapper }
        >
          <Image src={ props.imgUrl || '/unknown-user.png' }
                 className={ 'img-fluid' }
                 alt={ `${props.name} logo` }
          />
        </NavLink>

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