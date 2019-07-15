import { State } from "./types/State";
import createGrid from "./lib/createGrid";

const state: State = {
  grid: createGrid()
};

export { state };
