import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageProfile from '@containers/PgeProfile';
import PageMessage from '@containers/PageMessage';
import styles from './index.module.scss'

const MainContent = props => {
  return (
    <main className={ styles.content }>
      <Switch>
        <Route path='/message' render={ () => <PageMessage pageTitle='Messages' /> } />
        <Route path='/' exact render={ () =>  <PageProfile pageTitle='My Profile' /> } />
      </Switch>
    </main>
  )
}

export default MainContent;
