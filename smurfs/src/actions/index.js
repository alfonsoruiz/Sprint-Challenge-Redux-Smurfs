import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const POST_SMURF = 'POST_SMURF';
export const POST_FAILURE = 'POST_FAILURE'

export const getSmurfs = () => dispatch => {
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_SMURFS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err});
    })
}

export const addSmurf = smurf => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: POST_SMURF, payload:  smurf });
    })
    .catch(err => {
      dispatch({ type: POST_FAILURE, payload: err.response });
    })
}