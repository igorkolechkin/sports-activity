import React from 'react';
import NavItem from '@components/Header/NavItem';
import styles from './index.module.scss'

const Nav = props => {
  return (
    <nav className={ styles.nav }>
      <ul>
        { props.navItems.map(item => {
          return <NavItem key={ item.id } data={ item } />
        }) }
      </ul>
    </nav>
  )
}

export default Nav;