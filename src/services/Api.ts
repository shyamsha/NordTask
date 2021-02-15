import config from "../config/app";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const peopleRequest = () => {
  const url = `${API_ENDPOINT}/people/`;
  return API.get(url);
};

export const paginationRequest =(params:{page:number})=>{
  const url = `${API_ENDPOINT}/people/?page=${params.page}`;
  return API.get(url)
}

export const searchRequest =(params:{name:string})=>{
  const url=`${API_ENDPOINT}/people/?search=${params.name}`;
  return API.get(url)
}

export const getSpecies=()=>{
  const url =   `${API_ENDPOINT}/species/`;
  return API.get(url);
}