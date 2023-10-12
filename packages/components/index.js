import * as components from "./src/index";
export * from "./src/index";

export default {
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};