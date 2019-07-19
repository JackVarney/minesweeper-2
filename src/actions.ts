import { ActionsType } from "hyperapp";
import { Actions } from "./types/Actions";
import { State } from "./types/State";

const actions: ActionsType<State, Actions> = {
  updateGrid: grid => () => ({ grid }),
  onGameOver: () => () => {
    alert("game over");

    return {
      grid: undefined
    };
  }
};

export { actions };
