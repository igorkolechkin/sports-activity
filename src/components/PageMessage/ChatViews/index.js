import React from 'react';
import styles from './index.module.scss';

const ChatViews = props => {
  return (
    <div className={styles.views}>
      {
        props.selectedMessage.length !== 0
        ? props.selectedMessage.map((item, index) => {
          const classes = [ styles.item, item.isMy ? styles.right : null ];
          return <div key={ index } className={ classes.join(' ') }>{ item.text }</div>
        })
        : <div className={ styles.preview }>Start dialog</div>
      }
    </div>
  )
}

export default ChatViews;