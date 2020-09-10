import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleHeaderHandler } from '@store/actions/headerAction';
import Nav from '@components/Header/Nav';
import Burger from '@components/Header/Burger';
import styles from './index.module.scss';

const Header = props => {
  const isHeader = props.store.headerReducer.isShow;

  const navItems = [
    {id: 0, content: 'Profile', href: '/', exact: true},
    {id: 1, content: 'Users', href: '/users', exact: false},
    {id: 2, content: 'Message', href: '/message', exact: false},
    {id: 3, content: 'Activities', href: '/activities', exact: false},
  ]

  return (
    <header className={ `${styles.header} ${ isHeader ? styles.show : ''}` }>
      <div className={ styles.header__content }>
        <div className={ styles.header__title }>Navigation</div>
        <Nav navItems={ navItems } />
      </div>

      <Burger
        showHeader={ isHeader }
        onToggleHeader={ props.toggleHeaderHandler }
      />
    </header>
  )
}

const mapStateToProps = state => {
  return {
    store: state
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleHeaderHandler}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);