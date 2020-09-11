import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsersNav from '@components/PageMessage/UsersNav';
import MessageArea from '@components/PageMessage/MessageArea';
import { selectUserMessage } from '@store/actions/messageAction';
import styles from './index.module.scss';

const PageMessage = props => {
  return (
    <>
      <h1 className='page-title'>{ props.pageTitle }</h1>

      <div className={ styles.content }>
        <UsersNav users={ props.users }
                  onCheckUser={ props.selectUserMessage } />
        <MessageArea selectedUser={ props.activeMessage } />
      </div>
    </>
  )
}

const mapStateToProps = props => {
  return {
    users: props.messageReducer.map(user => ({ id: user.id, name: user.name, selected: user.selected })),
    activeMessage: props.messageReducer.filter(user => user.selected)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({selectUserMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageMessage);