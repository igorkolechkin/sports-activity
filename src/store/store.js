import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxThunk from 'redux-thunk';
import rootReducer from '@store/redusers';
import rootSaga from '@store/sagas';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    bindMiddleware([reduxThunk, sagaMiddleware])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore