import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
},
applyMiddleware(thunk));

export default store;
