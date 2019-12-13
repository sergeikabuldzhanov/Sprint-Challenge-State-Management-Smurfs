import React from "react";

export default function Smurf({ smurf , deleteSmurf}) {
  return (
    <div className="smurf">
      <p>
        {smurf.name} is {smurf.age} years old and is {smurf.height} tall.
      </p>
      <button type = "button">Edit Smurf</button>
      <button type = "button" onClick = {event=>deleteSmurf(smurf.id)}>Delete Smurf</button>
    </div>
  );
}
