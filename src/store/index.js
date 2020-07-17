import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
import apiMiddleware from "./middlewares/apiMiddleWare";

const rootReducer = combineReducers({
  ...reducers,
});
const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware, apiMiddleware)
);
