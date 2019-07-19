import { ActionType } from "hyperapp";
import { MinesweeperGrid } from "./MinesweeperGrid";
import { State } from "./State";

interface Action<T = any> extends ActionType<T, State, Actions> {}

export interface Actions {
  updateGrid: Action<MinesweeperGrid>;
  onGameOver: Action;
}
