import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import portfolioSliceReducer from "../features/PersonalHomepage/Portfolio/portfolioSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioSliceReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
