import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import videosReducer from './videos_reducer';
import emailAddressReducer from '../components/emailAddress/emailAddress.reducer';

const rootReducer = combineReducers({
  videos: videosReducer,
  email: emailAddressReducer,
});

//const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));
export default store;
