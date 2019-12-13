import {INPUT_CHANGE, FORM_SUBMIT} from './formActionTypes';

export const initialForm = {
    name:"",
    age:0,
    height:0
};

export function formReducer(form = initialForm, action){
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...form,
                [action.payload.fieldName]: action.payload.fieldValue,
            }
        case FORM_SUBMIT:
            return initialForm;
        default:
            return form;
    }
};

export function inputChange(fieldName, fieldValue){
    return {
        type: INPUT_CHANGE,
        payload: {
            fieldName,
            fieldValue
        }
    };
};

export function formSubmit(){
    return{
        type: FORM_SUBMIT
    }
}