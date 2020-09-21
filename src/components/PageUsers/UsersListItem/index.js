import React from 'react';
import { NavLink  } from 'react-router-dom';
import styles from './index.module.scss';
import Button from '@components/UI/Button';
import Image from '@components/UI/Image';

const UsersListItem = props => {
  return (
    <li className={ styles['item-wrapper'] }>
      <div className={ styles.item }>

        <NavLink to={ `profile/${ props.id }` }
                 className={ styles.imageWrapper }
        >
          <Image src={ props.imgUrl || '/unknown-user.png' }
                 className={ styles.image }
                 alt={ `${props.name} logo` }
                 width={ 200 }
                 height={ 200 }
          />
        </NavLink>

        <div className={ styles.name }>{ props.name }</div>

        <div className={ styles['button-wrapper'] }>
          <Button onClick={ () => props.toggleFollowUserHandler(props.id, props.followed) }>
            { props.followed ? 'Unsubscribe' : 'Subscribe' }
          </Button>

          <Button>Send</Button>
        </div>
      </div>
    </li>
  )
}

export default UsersListItem;