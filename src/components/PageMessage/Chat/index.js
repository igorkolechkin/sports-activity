import React from 'react';
import styles from './index.module.scss'

const Chat = props => {
  return (
    props.message.map(item => {
      const classes = [ styles.item, item.isMy ? styles.right : null ];
      return <div className={ classes.join(' ') }>{ item.text }</div>
    })
  )
}

export default Chat;