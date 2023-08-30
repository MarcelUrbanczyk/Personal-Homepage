import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import portfolioSliceReducer from "../features/PersonalHomepage/Portfolio/portfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioSliceReducer,
  },
  sagaMiddleware: [sagaMiddleware],
});

export default store;
