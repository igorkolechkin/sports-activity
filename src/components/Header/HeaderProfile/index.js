import React from 'react';
import styles from './index.module.scss';
import Image from '@components/UI/Image';

const HeaderProfile = props => {
  return (
    <div className={ styles.profile }>
      <Image src={ props.imgUrl || '/unknown-user.png' }
             className={ styles.image }
             width={ 100 }
             height={ 100 }
      />
      <p className={ styles.name }>{ props.data.login }</p>
    </div>
  )
}

export default HeaderProfile;