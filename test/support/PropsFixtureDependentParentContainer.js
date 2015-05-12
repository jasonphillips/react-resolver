import PropsFixtureDependentParent from "./PropsFixtureDependentParent";
import { Resolver } from "../../dist";

export default Resolver.createContainer(PropsFixtureDependentParent, {
  resolve: {
    username: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("Eric"), 0);
      });
    },
  },
});
