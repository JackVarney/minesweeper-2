import { h, View } from "hyperapp";
import { Grid } from "./views/grid";
import { State } from "./types/State";
import { Actions } from "./types/Actions";

import "./view.postcss";

const view: View<State, Actions> = (state, actions) => {
  return (
    <div class="view">
      <Grid grid={state.grid} />
    </div>
  );
};

export { view };
