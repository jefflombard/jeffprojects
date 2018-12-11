import { combineReducers } from 'redux';
import filters from './filters.js';
import loading from './loading.js';
import projects from './projects.js';

const rootReducer = combineReducers({
  filters,
  loading,
  projects,
});

export default rootReducer;