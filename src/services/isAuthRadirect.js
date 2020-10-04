import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = props => {
  return {
    redirect: parseInt(props.headerReducer.isLogged)
  }
}

const isAuthRedirect = Component => {
  const RedirectComponent = props => {
    return props.redirect === 1 ? <Component { ...props } /> : <Redirect to='/login' />
  }

  return connect(mapStateToProps)(RedirectComponent)
}

export default isAuthRedirect;