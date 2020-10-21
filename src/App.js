import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '@store/store';
import Header from '@containers/Header';
import MainContent from '@containers/MainContent';

const store = configureStore()

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <MainContent />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
