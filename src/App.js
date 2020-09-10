import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from '@store/redusers';
import Header from '@containers/Header';
import MainContent from '@containers/MainContent';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

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
