import { People, PeopleActionTypes, Species } from "./types";
import { action } from "typesafe-actions";

export const getPeopleRequest = () =>
  action(PeopleActionTypes.GET_PEOPLE_REQUEST);
export const getPeopleSuccess = (res: People) =>
  action(PeopleActionTypes.GET_PEOPLE_SUCCESS, res);
export const getPeopleError = (message: Error) =>
  action(PeopleActionTypes.GET_PEOPLE_ERROR, message);

export const getPaginationRequest = (params: { page: number }) =>
  action(PeopleActionTypes.GET_PAGINATION_REQUEST, params);
export const getPaginationSuccess = (res: People) =>
  action(PeopleActionTypes.GET_PAGINATION_SUCCESS, res);
export const getPaginationError = (message: Error) =>
  action(PeopleActionTypes.GET_PAGINATION_ERROR, message);

export const getSearchRequest = (params: { name: string }) =>
  action(PeopleActionTypes.GET_SEARCH_REQUEST, params);
export const getSearchSuccess = (res: People) =>
  action(PeopleActionTypes.GET_SEARCH_SUCCESS, res);
export const getSearchError = (message: Error) =>
  action(PeopleActionTypes.GET_SEARCH_ERROR, message);

export const getSpeciesRequest = () =>
  action(PeopleActionTypes.GET_SPICES_REQUEST);
export const getSpeciesSuccess = (res: Species) =>
  action(PeopleActionTypes.GET_SPICES_SUCCESS, res);
export const getSpeciesError = (message: Error) =>
  action(PeopleActionTypes.GET_SPICES_ERROR, message);
