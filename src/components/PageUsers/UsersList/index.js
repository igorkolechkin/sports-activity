import React from 'react';
import UsersListItem from '@components/PageUsers/UsersListItem';
import styles from './index.module.scss';

const UsersList = props => {
  return (
    <ul className={ styles.list }>
      { props.users.map(user =>  {
        return <UsersListItem key={ user.id }
                              href={ user.id }
                              name={ user.name }
                              imgUrl={ user.photos.small }
                              followed={ user.followed }
        />
      } )}
    </ul>
  )
}

export default UsersList;