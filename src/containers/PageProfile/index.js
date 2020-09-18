import React from 'react';
import { connect } from 'react-redux';
import { samuraiApi } from '@services/requests';
import Profile from '@components/PageProfile/Profile';
import { setUserProfile } from '@store/actions/profileAction';

class PageProfile extends React.Component {
  componentDidMount() {
    this.profileFetch();
  }

  async profileFetch() {
    try {
      const users = await samuraiApi.get(`profile/${11560}`);
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
    info: props.profileReducer
  }
}

export default connect(mapStateToProps, {
  setUserProfile
})(PageProfile);