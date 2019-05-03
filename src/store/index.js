import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
    reducers,
    /* eslint-disable-next-line import/no-extraneous-dependencies */
    process.env.NODE_ENV === 'development' ? require('redux-devtools-extension').composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk),
);

export default store;
