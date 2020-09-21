import React from 'react';
import UsersListItem from '@components/PageUsers/UsersListItem';
import styles from './index.module.scss';

const UsersList = props => {
  return (
    <ul className={ styles.list }>
      { props.users.map(user =>  {
        return <UsersListItem key={ user.id }
                              id={ user.id }
                              name={ user.name }
                              imgUrl={ user.photos.small }
                              followed={ user.followed }
                              toggleFollowUserHandler={ props.toggleFollowUserHandler }
        />
      } )}
    </ul>
  )
}

export default UsersList;