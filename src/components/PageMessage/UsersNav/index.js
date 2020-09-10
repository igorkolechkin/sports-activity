import React from 'react';
import UsersNavItem from '@components/PageMessage/UsersNavItem';

const UsersNav = props => {
  return (
    <ul>
      { props.users.map(user => {
        return <UsersNavItem key={ user.id } name={ user.name } selected={ user.selected } />
      }) }
    </ul>
  )
}

export default UsersNav;