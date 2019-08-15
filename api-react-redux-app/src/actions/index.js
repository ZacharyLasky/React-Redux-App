import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then(response => {
        console.log(response.data.message);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.message })
      })
      .catch(error => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.response })
      })
  }
}