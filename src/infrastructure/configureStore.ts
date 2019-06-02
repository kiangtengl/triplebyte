import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { applyMiddleware, compose as baseCompose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createRootState from "./rootState";

export const history = createBrowserHistory();

const compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || baseCompose;

function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    createRootState(history),
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
