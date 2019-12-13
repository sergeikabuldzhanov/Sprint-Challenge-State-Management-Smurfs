import {
  DELETE_SMURF,
  EDIT_SMURF,
  GET_SMURFS,
  POST_SMURF
} from "./actionTypes";
import axios from "axios";

export const getSmurfs = () => dispatch => {
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({
        type: GET_SMURFS,
        payload: response.data
      });
    })
    .catch(error => {
      console.error(error);
    });
};

export const submitSmurf = formData => dispatch =>{
    const redactedFormData = {
        ...formData,
        height: formData.height+"cm"
    }
    axios.post(`http://localhost:3333/smurfs`, redactedFormData)
        .then(response=>{
            console.log(response);
            
            dispatch({
                type: POST_SMURF,
                payload:response.data
            });
        })
        .catch(error=>{
            console.error(error);
        });
};

export const deleteSmurf = id => dispatch =>{
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(response=>{
            dispatch({
                type: DELETE_SMURF,
                payload: response.data
            });
        })
        .catch(error=>{
            console.error(error);
        });
};

export const editSmurf = data => dispatch =>{
    const redactedFormData = {
        ...data,
        height: `${data.height.split('cm')[0]}cm`
    }
    axios.put(`http://localhost:3333/smurfs/${data.id}`, redactedFormData)
        .then(response=>{
            dispatch({
                type:EDIT_SMURF,
                payload: response.data
            });
        })
        .catch(error=>{
            console.error(error);
        });
};