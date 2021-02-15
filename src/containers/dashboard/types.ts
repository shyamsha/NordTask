export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface People {
  count: number;
  next: string;
  previous: string | null;
  results: Result[];
}

export interface speciesResult {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Species {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export enum PeopleActionTypes {
  GET_SPICES_REQUEST = "@@people/feed/GET_SPICES_REQUEST",
  GET_SPICES_SUCCESS = "@@people/feed/GET_SPICES_SUCCESS",
  GET_SPICES_ERROR = "@@people/feed/GET_SPICES_ERROR",

  GET_PEOPLE_REQUEST = "@@people/feed/GET_PEOPLE_REQUEST",
  GET_PEOPLE_SUCCESS = "@@people/feed/GET_PEOPLE_SUCCESS",
  GET_PEOPLE_ERROR = "@@people/feed/GET_PEOPLE_ERROR",

  GET_PAGINATION_REQUEST = "@@people/feed/GET_PAGINATION_REQUEST",
  GET_PAGINATION_SUCCESS = "@@people/feed/GET_PAGINATION_SUCCESS",
  GET_PAGINATION_ERROR = "@@people/feed/GET_PAGINATION_ERROR",

  GET_SEARCH_REQUEST = "@@people/feed/GET_SEARCH_REQUEST",
  GET_SEARCH_SUCCESS = "@@people/feed/GET_SEARCH_SUCCESS",
  GET_SEARCH_ERROR = "@@people/feed/GET_SEARCH_ERROR",
}

export interface PeopleState {
  readonly loading: boolean;
  readonly people: People | null;
  readonly species: Species | null;
  readonly errors: {
    peopleError?: string;
    speciesError?:string;
  };
}
