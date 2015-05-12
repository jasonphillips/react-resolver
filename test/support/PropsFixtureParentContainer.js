import PropsFixtureParent from "./PropsFixtureParent";
import { Resolver } from "../../dist";

export default Resolver.createContainer(PropsFixtureParent, {
  resolve: {
    foo: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("bar"), 0);
      });
    },
  },
});
