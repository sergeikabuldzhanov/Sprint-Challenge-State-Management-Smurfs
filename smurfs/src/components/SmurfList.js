import React, {useEffect} from "react";
import Smurf from "./Smurf";
import {connect} from 'react-redux';
import {getSmurfs, deleteSmurf, editSmurf} from '../state/actionCreators';

export function SmurfList({ smurfs, getSmurfs, deleteSmurf, editSmurf }) {
    useEffect(()=>{
        getSmurfs();
    }, [getSmurfs]);
  return (
    <div className="smurf-list">
      {smurfs.map(smurf => (
        <Smurf
          smurf = {smurf}
          deleteSmurf = {deleteSmurf}
          key={smurf.id}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state){
    return {
        smurfs:state.smurfs,
    };
};

export default connect(mapStateToProps, {getSmurfs, deleteSmurf, editSmurf})(SmurfList);