import { FETCH_SMURFS } from '../actions';
import { FETCH_SMURFS_FAILURE } from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


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
      }
    default:
      return state;
  }
}