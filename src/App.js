import React from "react";
import Header from "./Header";
import Body from "./Body";
import { connect } from "react-redux";
class App extends React.Component {
  state = {
    nilai: 0,
    calc: 0
  };
  handleAdd = () => {
    this.setState({
      nilai: this.state.nilai + this.state.calc
    });
    this.props.setAdd();
  };
  handleSubs = () => {
    this.setState({
      nilai: this.state.nilai - this.state.calc
    });
    this.props.setSubs();
  };
  handleCalc = (pVal) => {
    const val = parseInt(pVal, 10);
    this.setState({
      calc: val
    });
    this.props.setCalc(val);
  };
  render() {
    return (
      <div>
        <Header propNilai={this.state.nilai} />
        <Body
          propNilai={this.state.nilai}
          setAdd={this.handleAdd}
          setSubs={this.handleSubs}
          setCalc={(val) => {
            this.handleCalc(val);
          }}
        />
      </div>
    );
  }
}

const mapToProps = (state) => {
  return {
    data: state.nilai
  };
};

const mapToDispatch = (dispatch) => {
  return {
    setAdd: () => {
      dispatch({ type: "ADD" });
    },
    setSubs: () => {
      dispatch({ type: "SUBS" });
    },
    setCalc: (val) => {
      dispatch({ type: "CALC", value: val });
    }
  };
};

export default connect(mapToProps, mapToDispatch)(App);
