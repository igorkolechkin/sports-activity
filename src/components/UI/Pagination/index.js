import React from 'react';
import styles from './index.module.scss';

const Pagination = props => {
  return (
    <ul className={ styles.nav }>
      { props.pages.map(page => <li key={ page.id } className={ styles.item }>{ page.name }</li>) }
    </ul>
  )
}

export default Pagination;