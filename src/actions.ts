import { ActionsType } from "hyperapp";
import { Actions } from "./types/Actions";
import { State } from "./types/State";

const actions: ActionsType<State, Actions> = {
  updateGrid: grid => () => ({ grid })
};

export { actions };
