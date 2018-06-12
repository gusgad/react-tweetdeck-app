import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState || initialState,
  compose(
    applyMiddleware(...middleware),
    // UNCOMMENT THE NEXT LINE TO ENABLE DEBUGGING EXTENSIONS
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Save the current state to localstorage but throttle to keep the thread clean
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 500));

export default store;