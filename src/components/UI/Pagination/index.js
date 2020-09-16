import React from 'react';
import styles from './index.module.scss';

const Pagination = props => {
  return (
    <ul className={ styles.nav }>
      { props.pages.map(page => {
        return <li key={ page.id }
                   className={ `${styles.item} ${ page.isCurrent ? styles['current'] : ''}` }
                   onClick={ e => props.clickHandler(e.target) }
               >{ page.name }</li>
      }) }
    </ul>
  )
}

export default Pagination;