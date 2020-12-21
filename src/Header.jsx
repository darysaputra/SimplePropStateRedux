import React from "react";
import { connect } from "react-redux";
const Header = (props) => {
  return (
    <p>
      Header {props.propNilai} [{props.data}]
    </p>
  );
};

const mapToProps = (state) => {
  return {
    data: state.nilai
  };
};

export default connect(mapToProps)(Header);
