import React from 'react';

const Spinner=(props)=>{
    console.log(props.style)
    return(

  <div style={props.style} className="ui active dimmer">
    <div className="ui text loader">{props.message}</div>
  </div>
    );
};
Spinner.defaultProps={
  message:'Loading...'// here to specify what to show in default case in message props
}
export default Spinner;
