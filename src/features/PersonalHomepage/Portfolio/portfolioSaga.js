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
    yield put(fetchProjectsLoading());
    yield delay(2000); //to show loading screen
    const projects = yield call(getProjects);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsError());
  }
}

export function* portfolioSaga() {
  yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}
