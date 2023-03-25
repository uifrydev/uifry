import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import featuresReducer from './slices/featues';

// export type RootState = ReturnType<typeof store.getState>;

// type StoreType = ReturnType<typeof configureStore>;

// const makeStore: MakeStore<StoreType> = () => {
//   const store = configureStore({
//     reducer: {
//       // Add your reducers here
//       features: featuresReducer
//     },
//   });

//   return store;
// };

// const wrapper = createWrapper<StoreType>(makeStore);

// export default wrapper;


export const store = configureStore({
  reducer: {
    features: featuresReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;