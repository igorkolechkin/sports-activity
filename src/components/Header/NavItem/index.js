import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleHeaderHandler } from '@store/actions/headerAction';
import { NavLink  } from 'react-router-dom';
import styles from './index.module.scss';

const NavItem = props => {
  const { exact, href, content } = props.data;

  return (
    <li className={ styles.item }>
      <NavLink exact={ exact }
               to={ href }
               className={ styles.link }
               activeClassName={ styles.active }
               onClick={ props.toggleHeaderHandler }
      >{ content }</NavLink>
    </li>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleHeaderHandler}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavItem);