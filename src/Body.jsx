import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Body = (props) => {
  function handleAdd() {
    props.setAdd();
  }
  function handleSubs() {
    props.setSubs();
  }
  function handleCalc(pValue) {
    props.setCalc(pValue);
  }
  return (
    <div>
      <Button
        onClick={() => {
          handleAdd();
        }}
      >
        +
      </Button>
      <TextField
        variant="outlined"
        onChange={(val) => {
          handleCalc(val.target.value);
        }}
      />
      <Button
        onClick={() => {
          handleSubs();
        }}
      >
        -
      </Button>
    </div>
  );
};

export default Body;
