import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducers: {},
  sagaMiddleware: [sagaMiddleware],
});

export default store;
