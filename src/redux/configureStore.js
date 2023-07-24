import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './Rockets/rocket';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
},
applyMiddleware(thunk));

export default store;
