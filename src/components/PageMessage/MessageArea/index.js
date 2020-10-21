import React from 'react';
import styles from './index.module.scss'
import ChatViews from '@components/PageMessage/ChatViews';
import Controls from '@components/PageMessage/Controls';

const MessageArea = props => {
  return (
    <div className={ styles.area }>
      <ChatViews selectedMessage={ props.selectedMessage } />
      <Controls currentMessageText={ props.currentMessageText }
                addNewMessage={ props.addNewMessage }/>
    </div>
  )
}

export default MessageArea;