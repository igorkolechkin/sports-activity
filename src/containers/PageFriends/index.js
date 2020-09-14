import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriends } from '@store/actions/friendsAction';
import styles from './index.module.scss';

const PageFriends = props => {
  if (props.friends.length === 0) props.addFriends();

  return (
    <>
      <h1 className='page-title'>{ props.pageTitle }</h1>

      <div className={ styles.content }>
        { props.friends.map(friend => <div>{friend}</div>) }
      </div>
    </>
  )
}

const mapStateToProps = props => {
  return {
    friends: props.friendsReducer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFriends
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageFriends);