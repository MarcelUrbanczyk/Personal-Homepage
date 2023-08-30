import { all } from "redux-saga/effects";
import { portfolioSaga } from "../features/PersonalHomepage/Portfolio/portfolioSaga";

export function* rootSaga() {
  yield all([portfolioSaga()]);
}
