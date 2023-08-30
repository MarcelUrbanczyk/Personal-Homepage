import { getProjects } from "./getProjects";
import { put, delay, call, takeLatest } from "redux-saga/effects";
import {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsLoading,
  fetchProjectsSuccess,
} from "./portfolioSlice";

function* fetchProjectsHandler() {
  try {
    console.log("1");
    yield put(fetchProjectsLoading());
    yield delay(1000);
    console.log("2");
    const projects = yield call(getProjects);
    console.log("3");
    yield put(fetchProjectsSuccess(projects));
    console.log("4");
  } catch (error) {
    yield put(fetchProjectsError());
  }
}

export function* portfolioSaga() {
  yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}
