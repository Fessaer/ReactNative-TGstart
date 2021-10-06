import {configureStore} from '@reduxjs/toolkit';
import reducer from './rootReducer';

const preloadedState = {
  users: {
    data: [],
    page: 1,
    loading: false,
    refresh: false,
    filterShow: 'all',
  },
};

export default configureStore({
  reducer,
  preloadedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
