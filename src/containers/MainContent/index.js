import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageProfile from '@containers/PageProfile';
import PageMessage from '@containers/PageMessage';
import PageUsers from '@containers/PageUsers';
import PageLogin from '@containers/PageLogin';
import styles from './index.module.scss'

const MainContent = props => {
  return (
    <main className={ styles.content }>
      <Switch>
        <Route path='/profile/:id?' render={ () =>  <PageProfile pageTitle='My Profile' /> } />
        <Route path='/users' exact render={ () =>  <PageUsers pageTitle='Users' /> } />
        <Route path='/message' render={ () => <PageMessage pageTitle='Messages' /> } />
        <Route path='/login' render={ () => <PageLogin pageTitle='Login' /> } />
      </Switch>
    </main>
  )
}

export default MainContent;
