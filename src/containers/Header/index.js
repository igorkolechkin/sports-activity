import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleHeaderHandler } from '@store/actions/headerAction';
import Nav from '@components/Header/Nav';
import Burger from '@components/Header/Burger';
import styles from './index.module.scss';

const Header = props => {
  return (
    <header className={ `${styles.header} ${ props.isHeaderShow ? styles.show : ''}` }>
      <div className={ styles.header__content }>
        <div className={ styles.header__title }>Navigation</div>
        <Nav navItems={ props.navItems } />
      </div>

      <Burger
        showHeader={ props.isHeaderShow }
        onToggleHeader={ props.toggleHeaderHandler }
      />
    </header>
  )
}

const mapStateToProps = state => {
  return {
    isHeaderShow: state.headerReducer.isHeaderShow,
    navItems: state.headerReducer.navigation
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleHeaderHandler}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);