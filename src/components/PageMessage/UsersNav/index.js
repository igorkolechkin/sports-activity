import React from 'react';
import UsersNavItem from '@components/PageMessage/UsersNavItem';
import styles from './index.module.scss'

const UsersNav = props => {
  return (
    <ul className={ styles.nav }>
      { props.users.map(user => {
        return <UsersNavItem key={ user.id }
                             id={ user.id }
                             name={ user.name }
                             selected={ user.selected }
                             onCheckUser={ props.onCheckUser } />
      }) }
    </ul>
  )
}

export default UsersNav;