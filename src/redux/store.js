import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStoreHook } from "react-redux";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
