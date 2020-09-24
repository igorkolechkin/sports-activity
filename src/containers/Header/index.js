import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleHeaderHandler, userLoggedThunk } from '@store/actions/headerAction';
import Nav from '@components/Header/Nav';
import Burger from '@components/Header/Burger';
import HeaderProfile from '@components/Header/HeaderProfile';
import Button from '@components/UI/Button';
import styles from './index.module.scss';

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.isLogged) this.props.userLoggedThunk();
  }

  render() {
    return (
      <header className={ `${styles.header} ${ this.props.isHeaderShow ? styles.show : ''}` }>
        <div className={ styles.header__content }>
          <div className={ styles.header__title }>Navigation</div>

          {
            this.props.isLogged
              ? <>
                <HeaderProfile data={ this.props.userDetails } />
                <Nav navItems={ this.props.navItems } />
              </>
              : <Button classes={ styles.loginBtn }>
                <NavLink to={'/login'}>Login</NavLink>
              </Button>
          }
        </div>

        <Burger
          showHeader={ this.props.isHeaderShow }
          onToggleHeader={ this.props.toggleHeaderHandler }
        />
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    isHeaderShow: state.headerReducer.isHeaderShow,
    navItems: state.headerReducer.navigation,
    isLogged: state.headerReducer.isLogged,
    userDetails: state.headerReducer.userDetails
  }
}

export default connect(mapStateToProps, {
  toggleHeaderHandler, userLoggedThunk
})(Header);