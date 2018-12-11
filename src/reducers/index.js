import { combineReducers } from 'redux';
import loading from './loading.js';
import projects from './projects.js';

const rootReducer = combineReducers({
  loading,
  projects
});

export default rootReducer;