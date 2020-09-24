import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from '@components/PageProfile/Profile';
import { setUserProfileThunk } from '@store/actions/profileAction';

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
        <h1 className='page-title'>Page Profile</h1>

        <Profile { ...this.props.info } />
      </>
    )
  }
}

const mapStateToProps = props => {
  return {
    info: props.profileReducer
  }
}

export default connect(mapStateToProps, { setUserProfileThunk })(withRouter(PageProfile));