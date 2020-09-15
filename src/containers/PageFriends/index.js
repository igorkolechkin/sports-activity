import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriends } from '@store/actions/friendsAction';
import FriendListItem from '@components/PageFriend/FriendListItem';
import Loader from '@components/UI/Loader';
import styles from './index.module.scss';

class PageFriends extends React.Component {
  componentDidMount() {
    this.props.addFriends();
  }

  render() {
    return (
      <>
        <h1 className='page-title'>{ this.props.pageTitle }</h1>

        <div className={ styles.content }>
          {
            this.props.loaded
              ? <ul className={ styles.list }>
                { this.props.friends.map(friend =>  {
                  return <FriendListItem key={ friend.id } name={ friend.name } imgUrl={ friend.photos.large } />
                } )}
              </ul>
              : <Loader />
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = props => {
  return {
    loaded: props.friendsReducer.loaded,
    friends: props.friendsReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFriends
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageFriends);