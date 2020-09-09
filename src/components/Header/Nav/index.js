import React from 'react';
import NavItem from '@components/Header/NavItem';
import styles from './index.module.scss'

const Nav = props => {
  const navClasses = [
    styles.nav,
    props.showMenu ? styles.open : null
  ];

  const navItems = [
    {id: 0, content: 'Profile'},
    {id: 1, content: 'Users'}
  ]

  return (
    <nav className={ navClasses.join(' ') }>
      <ul>
        { navItems.map(item => <NavItem key={ item.id } content={ item.content } />) }
      </ul>
    </nav>
  )
}

export default Nav;