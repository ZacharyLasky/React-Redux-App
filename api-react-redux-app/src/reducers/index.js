import FETCH_DATA_START from '../actions';
import FETCH_DATA_SUCCESS from '../actions';
import FETCH_DATA_FAILURE from '../actions';

const initialState = {
  dogs: [],
  isLoading: false,
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        isLoading: true,
        error: ""
      }
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: "",
        dogs: action.payload
      }
    default:
      return state;
  }
}