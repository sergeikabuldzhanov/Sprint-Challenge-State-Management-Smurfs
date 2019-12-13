import React, { useReducer } from "react";
import { initialForm, formReducer, inputChange, formSubmit } from "./formReducer";
import { connect } from "react-redux";
import { submitSmurf, editSmurf } from "../../state/actionCreators";

export function Form({ submitSmurf, editSmurf, smurfID, setEdit, initialValues = initialForm }) {
  const [form, dispatch] = useReducer(formReducer, initialValues);
  const onInput = event => {
    dispatch(inputChange(event.target.name, event.target.value));
  };
  const onSubmit = event => {
    event.preventDefault();
    if(smurfID!==undefined){
      editSmurf({...form, id:smurfID});
      setEdit(false)
    }else{
      submitSmurf(form);
      dispatch(formSubmit());
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name of Smurf
        <input type="text" name="name" value={form.name} onChange={onInput} />
      </label>
      <label>
        Age of Smurf
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={onInput}
          min={0}
        />
      </label>
      <label>
        Height of Smurf
        <input
          type="text"
          name="height"
          value={form.height}
          onChange={onInput}
          min={0}
        />
      </label>
      <button type="submit" >Submit</button>
    </form>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { submitSmurf, editSmurf })(Form);
