import { combineReducers } from 'redux';
import authSlice from './slices/authSlice';

// Import your individual reducers here

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  auth: authSlice,
  // Add more reducers here as needed
});

export default rootReducer;
