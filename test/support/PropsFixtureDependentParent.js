import React from "react";
import PropsFixtureDependentChildContainer from "./PropsFixtureDependentChildContainer";

class PropsFixtureDependentParent extends React.Component {
  render() {
    return (
      <PropsFixtureDependentChildContainer username={this.props.username}/>
    );
  }
}

PropsFixtureDependentParent.displayName = "PropsFixtureDependentParent";

export default PropsFixtureDependentParent;
