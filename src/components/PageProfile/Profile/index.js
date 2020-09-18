import React from 'react';
import styles from './index.module.scss';
import Image from '@components/UI/Image';

const Profile = props => {
  return (
    <>
      <div className={ styles.imageWrapper }>
        <Image src={ props.imgUrl || '/unknown-user.png' }
               className={ 'img-fluid' }
               alt={ `${props.name} logo` }
        />
      </div>

      <h2 className={ styles.title }>{ props.fullName }</h2>
    </>
  )
}

export default Profile;