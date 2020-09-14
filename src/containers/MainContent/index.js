import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageProfile from '@containers/PageProfile';
import PageMessage from '@containers/PageMessage';
import PageFriends from '@containers/PageFriends';
import styles from './index.module.scss'

const MainContent = props => {
  return (
    <main className={ styles.content }>
      <Switch>
        <Route path='/message' render={ () => <PageMessage pageTitle='Messages' /> } />
        <Route path='/users' exact render={ () =>  <PageFriends pageTitle='Friends' /> } />
        <Route path='/' exact render={ () =>  <PageProfile pageTitle='My Profile' /> } />
      </Switch>
    </main>
  )
}

export default MainContent;
