import {
  FETCH_SMURFS,
  FETCH_SMURFS_FAILURE,
  POST_SMURF,
  POST_FAILURE
} from '../actions'

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 };

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: true
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case POST_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      };
    case POST_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}