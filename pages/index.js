import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-most';
import appReducer from './store/app.reducer';
import appEpic from './store/app.epics';
import RootNavigator from './RootNavigator';

const epicMiddleware = createEpicMiddleware(appEpic);
export const store = createStore(
  appReducer,
  compose(applyMiddleware(epicMiddleware)),
);

export default function() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}
