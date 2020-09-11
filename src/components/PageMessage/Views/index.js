import React from 'react';
import Chat from '@components/PageMessage/Chat';
import styles from './index.module.scss';

const Views = props => {
  const preview = props.selectedUser.length === 0 || props.selectedUser[0].message.length === 0;

  return (
    <div className={ styles.views }>
      { preview ? <div className={ styles.preview }>Enter chat...</div> : <Chat message={ props.selectedUser[0].message } /> }
    </div>
  )
}

export default Views;