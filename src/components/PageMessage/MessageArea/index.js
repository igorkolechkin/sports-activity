import React from 'react';
import styles from './index.module.scss'
import Views from '@components/PageMessage/Views';
import Controls from '@components/PageMessage/Controls';

const MessageArea = props => {
  return (
    <div className={ styles.area }>
      <Views selectedUser={ props.selectedUser } />
      <Controls />
    </div>
  )
}

export default MessageArea;