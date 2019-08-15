import axios from 'axios';

const FETCH_DATA_START = "FETCH_DATA_START";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then(response => {
        console.log(response);
      })
  }
}