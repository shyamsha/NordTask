import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { Action } from "redux";
import {
  getPaginationError,
  getPaginationSuccess,
  getPeopleError,
  getPeopleSuccess,
  getSearchError,
  getSearchSuccess,
  getSpeciesError,
  getSpeciesSuccess,
} from "./actions";
import { PeopleActionTypes } from "./types";

type SagaAction<T> = Action & { payload: T };

function* people() {
  try {
    const res = yield call(Api.peopleRequest);
    if (res.error) {
      yield put(getPeopleError(res.error));
    } else {
      yield put(getPeopleSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getPeopleError(err));
    } else {
      yield put(getPeopleError(unknownError("An unknown error occurred")));
    }
  }
}

function* pagination({ payload: params }: SagaAction<{ page: number }>) {
  try {
    const res = yield call(Api.paginationRequest, params);
    if (res.error) {
      yield put(getPaginationError(res.error));
    } else {
      yield put(getPaginationSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getPaginationError(err));
    } else {
      yield put(getPaginationError(unknownError("An unknown error occurred")));
    }
  }
}

function* search({ payload: params }: SagaAction<{ name: string }>) {
  try {
    const res = yield call(Api.searchRequest, params);
    if (res.error) {
      yield put(getSearchError(res.error));
    } else {
      yield put(getSearchSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getSearchError(err));
    } else {
      yield put(getSearchError(unknownError("An unknown error occurred")));
    }
  }
}

function* species() {
  try {
    const res = yield call(Api.getSpecies);
    if (res.error) {
      yield put(getSpeciesError(res.error));
    } else {
      yield put(getSpeciesSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getSpeciesError(err));
    } else {
      yield put(getSpeciesError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
  yield takeLatest(PeopleActionTypes.GET_PEOPLE_REQUEST, people);
  yield takeLatest(PeopleActionTypes.GET_PAGINATION_REQUEST, pagination);
  yield takeLatest(PeopleActionTypes.GET_SEARCH_REQUEST, search);
  yield takeLatest(PeopleActionTypes.GET_SPICES_REQUEST,species)
}

export function* peopleSaga() {
  yield all([fork(watchFetchRequest)]);
}
