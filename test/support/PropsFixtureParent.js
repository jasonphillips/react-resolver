import React from "react";
import PropsFixtureContainer from "./PropsFixtureContainer";

class PropsFixtureParent extends React.Component {
  render() {
    return (
      <PropsFixtureContainer foo={this.props.foo}/>
    );
  }
}

PropsFixtureParent.displayName = "PropsFixtureParent";

export default PropsFixtureParent;
