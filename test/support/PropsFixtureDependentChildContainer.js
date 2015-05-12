import React from "react";
import PropsFixture from "./PropsFixture";
import { Resolver } from "../../dist";

export default Resolver.createContainer(PropsFixture, {
  resolve: {
    user: (props) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(props.username), 0);
      });
    },
  },
});
