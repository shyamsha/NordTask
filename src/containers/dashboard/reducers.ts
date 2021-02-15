import { PeopleState, PeopleActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: PeopleState = {
  loading: false,
  people: null,
  species: null,
  errors: {
    peopleError: undefined,
    speciesError: undefined,
  },
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<PeopleState, A> = (
  state: PeopleState = initialState,
  action: A
) => {
  switch (action.type) {
    case PeopleActionTypes.GET_PEOPLE_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, peopleError: undefined },
      };
    case PeopleActionTypes.GET_PEOPLE_SUCCESS:
      return { ...state, loading: false, people: action.payload };
    case PeopleActionTypes.GET_PEOPLE_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, peopleError: action.payload },
      };

    case PeopleActionTypes.GET_PAGINATION_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, peopleError: undefined },
      };

    case PeopleActionTypes.GET_PAGINATION_SUCCESS:
      return { ...state, loading: false, people: action.payload };
    case PeopleActionTypes.GET_PAGINATION_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, peopleError: action.payload },
      };

    case PeopleActionTypes.GET_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, peopleError: undefined },
      };
    case PeopleActionTypes.GET_SEARCH_SUCCESS:
      return { ...state, loading: false, people: action.payload };
    case PeopleActionTypes.GET_SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, peopleError: action.payload },
      };

    case PeopleActionTypes.GET_SPICES_REQUEST:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, speciesError: undefined },
      };
    case PeopleActionTypes.GET_SPICES_SUCCESS:
      return { ...state, loading: false, species: action.payload };
    case PeopleActionTypes.GET_SPICES_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, speciesError: action.payload },
      };

    default:
      return state;
  }
};

export { initialState as peopleInitialState, reducer as peopleReducer };
