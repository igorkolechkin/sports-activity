import React from 'react';
import { connect } from 'react-redux';
import UsersNav from '@components/PageMessage/UsersNav';
import MessageArea from '@components/PageMessage/MessageArea';
import { selectUserToMessage, addNewMessage } from '@store/actions/messageAction';
import styles from './index.module.scss';
import { compose } from 'redux';
import isAuthRedirect from '@services/isAuthRadirect';

const PageMessage = props => {
  return (
    <>
      <h1 className='page-title'>{ props.pageTitle }</h1>

      <div className={ styles.content }>
        <UsersNav users={ props.users }
                  onCheckUser={ props.selectUserToMessage } />
        <MessageArea selectedMessage={ props.selectedMessage.message }
                     currentMessageText={ props.currentMessageText }
                     addNewMessage={ props.addNewMessage } />
      </div>
    </>
  )
}

const mapStateToProps = props => {
  const users = props.messageReducer.users;

  return {
    users: users.map(user => ({ id: user.id, name: user.name })),
    selectedMessage: users[props.messageReducer.getSelectedUserIndex()],
    currentMessageText: props.messageReducer.currentMessageText
  }
}

export default compose(
  connect(mapStateToProps, {
    selectUserToMessage, addNewMessage
  }),
  isAuthRedirect,
)(PageMessage);