import { compose, createStore } from 'redux';
import { rootReducer } from '../rootReducer';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    compose(...[]),
  );

  return { store };
};
