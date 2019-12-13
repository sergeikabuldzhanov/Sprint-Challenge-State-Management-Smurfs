import React, {useState} from "react";
import Form from './Form/Form';

export default function Smurf({ smurf , deleteSmurf}) {
    const [edit, setEdit] = useState(false);
  return (
    <div className="smurf">
      <p>
        {smurf.name} is {smurf.age} years old and is {smurf.height} tall.
      </p>
      <button type = "button"onClick={event=>setEdit(!edit)}>Edit Smurf</button>
      <button type = "button" onClick = {event=>deleteSmurf(smurf.id)}>Delete Smurf</button>
      {edit && <Form initialValues = {smurf} smurfID = {smurf.id} setEdit={setEdit}/>}
    </div>
  );
}
