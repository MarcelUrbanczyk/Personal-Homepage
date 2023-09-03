import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import portfolioReducer from "../features/PersonalHomepage/Portfolio/portfolioSlice";
import themeReducer from "../common/theme/themeSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
