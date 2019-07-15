import { ActionType } from "hyperapp";
import { MinesweeperGrid } from "./MinesweeperGrid";
import { State } from "./State";

export interface Actions {
  updateGrid: ActionType<MinesweeperGrid, State, Actions>;
}
