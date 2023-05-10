import React from "react";

function Grid(props) {
  return (
    <div className="grid" style={props.style}>
      {props.children}
    </div>
  );
}

export default Grid;
