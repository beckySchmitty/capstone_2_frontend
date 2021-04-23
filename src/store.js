import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import  { composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import root from "./reducers/root";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

/**
 * Setup of Redux store
 * includes thunk
 * includes persistedStore 
 * 
 */

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);