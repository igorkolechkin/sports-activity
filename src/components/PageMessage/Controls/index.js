import React from 'react';
import Button from '@components/UI/Button';
import styles from './index.module.scss';

const Controls = props => {
  return (
    <div className={ styles.block }>
      <textarea value={ props.currentMessageText }
                onChange={ e => props.writeNewMessage(e.target.value) }
                className={ styles.text } name="text" id="" />

      <Button classes={ styles.btn } onClick={ props.addNewMessage }>Send</Button>
    </div>
  )
}

export default Controls;