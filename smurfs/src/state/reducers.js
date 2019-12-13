import {DELETE_SMURF, EDIT_SMURF, GET_SMURFS, POST_SMURF} from './actionTypes';

const initialSmurfs = [];

export function smurfReducer(smurfs = initialSmurfs, action){
    switch (action.type) {
        case GET_SMURFS:
            return action.payload;
        case POST_SMURF:
            return action.payload;
        case EDIT_SMURF:
            return action.payload;
        case DELETE_SMURF:
            return action.payload;
        default:
            return smurfs;
    }
}