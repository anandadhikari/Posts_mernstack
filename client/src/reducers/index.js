import { combineReducers } from 'redux';

import postsReducer from '../reducers/posts';
import authReducer from '../reducers/auth';

const reducers = combineReducers({ posts: postsReducer, auth: authReducer });

export default reducers;
