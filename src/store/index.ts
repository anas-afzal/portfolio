import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reducers } from './reducers';
import * as actions from './actions';

const loggerMiddleware = createLogger({collapsed: true});
const store = createStore(reducers, applyMiddleware(loggerMiddleware));

export {store, actions};
export type RootState = ReturnType<typeof reducers>