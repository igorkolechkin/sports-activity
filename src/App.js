import React from 'react';
import Provider from 'react-redux';
import { createStore } from 'redux';
//import rootReducer from '@store/redusers';
import Header from '@containers/Header';

//const store = createStore(rootReducer)

function App() {
  return (
    // <Provider store={ store }>
      <div className="app-wrapper">
        <Header />
      </div>
    // </Provider>
  );
}

export default App;
