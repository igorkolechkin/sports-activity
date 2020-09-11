import React from 'react';
import Button from '@components/UI/Button';
import styles from './index.module.scss';

const onChangeHandler = e => {
  console.log(e.target.value)
}

const Controls = () => {
  return (
    <div className={ styles.block }>
      <textarea onChange={ onChangeHandler } className={ styles.text } name="text" id="" />

      <Button clases={ styles.btn }>Send</Button>
    </div>
  )
}

const mapStateToProps = props => {
  return {

  }
}

export default Controls;