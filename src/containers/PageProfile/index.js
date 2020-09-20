import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { samuraiApi } from '@services/requests';
import Profile from '@components/PageProfile/Profile';
import { setUserProfile } from '@store/actions/profileAction';

class PageProfile extends React.Component {
  componentDidMount() {
    this.profileFetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.profileFetch();
    }
  }

  async profileFetch(id) {
    try {
      const users = await samuraiApi.get(`profile/${ this.props.match.params.id || 2 }`);
      this.props.setUserProfile(users.data)
    } catch (e) {

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
    info: props.profileReducer,
    // userId: this.props.match.params.id || 2
  }
}

export default connect(mapStateToProps, {
  setUserProfile
})(withRouter(PageProfile));