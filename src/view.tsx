import { h, View } from "hyperapp";
import { Grid } from "./components/grid";
import { State } from "./types/State";
import { Actions } from "./types/Actions";

import "./view.postcss";
import { EmptyGrid } from "./components/empty-grid";

const view: View<State, Actions> = (state, actions) => {
  return (
    <div class="view">
      {state.grid === undefined ? (
        <EmptyGrid updateGrid={actions.updateGrid} />
      ) : (
        <Grid grid={state.grid} onCellClick={() => {}} />
      )}
    </div>
  );
};

export { view };
