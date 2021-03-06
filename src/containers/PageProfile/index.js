import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from '@components/PageProfile/Profile';
import { setUserProfileThunk } from '@store/actions/profileAction';
import { compose } from 'redux';
import isAuthRedirect from '@services/isAuthRadirect';

class PageProfile extends React.Component {
  componentDidMount() {
    this.props.setUserProfileThunk(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.setUserProfileThunk(this.props.match.params.id)
    }
  }

  render() {
    return (
      <>
        <h1 className='page-title'>{ this.props.pageTitle }</h1>

        <Profile { ...this.props.info } />
      </>
    )
  }
}

const mapStateToProps = props => {
  return {
    info: props.profileReducer,
    isLogged: props.headerReducer.isLogged
  }
}

export default compose(
  connect(mapStateToProps, { setUserProfileThunk }),
  withRouter,
  isAuthRedirect,
)(PageProfile)