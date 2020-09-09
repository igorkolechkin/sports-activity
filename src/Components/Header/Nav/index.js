import React from 'react';
import NavItem from './NavItem';
import styles from './index.module.scss'

const nav = props => {
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
      <button
        onClick={ props.onToggleMenu }
        className={ `${styles.nav__btn} ${props.showMenu ? styles.nav__opened_btn : ''}` }>
        <span></span>
      </button>

      <div className={ styles.nav__title }>Navigation</div>

      <ul>
        { navItems.map(item => <NavItem key={ item.id } content={ item.content } />) }
      </ul>
    </nav>
  )
}

export default nav;