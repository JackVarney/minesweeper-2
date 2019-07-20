import { h, View } from "hyperapp";
import { Grid } from "./components/grid";
import { State } from "./types/State";
import { Actions } from "./types/Actions";
import { MinesweeperGridCell } from "./types/MinesweeperGridCell";
import { createGridWithNoConflicts, createGrid } from "./lib/createGrid";

import "./view.postcss";
import { revealCell } from "./lib/revealCell";
import { checkAllMinesFlagged } from "./lib/checkAllMinesFlagged";

const view: View<State, Actions> = ({ grid }, { updateGrid, onGameOver }) => {
  function onCellClick(cell: MinesweeperGridCell) {
    if (grid === undefined) {
      updateGrid(createGridWithNoConflicts(cell.point.x, cell.point.y));
    } else {
      if (cell.hasFlag) {
        return;
      }

      updateGrid(revealCell(cell, grid));

      if (cell.hasMine) {
        onGameOver();
      }
    }
  }

  function onCellRightClick(cell: MinesweeperGridCell) {
    if (grid !== undefined && !cell.revealed) {
      grid[cell.point.y][cell.point.x].hasFlag = !cell.hasFlag;

      updateGrid(grid);
    }
  }

  if (grid !== undefined && checkAllMinesFlagged(grid)) {
    onGameOver("Well done, good win!");
  }

  return (
    <div class="view">
      <Grid
        grid={grid === undefined ? createGrid() : grid}
        onCellClick={onCellClick}
        onCellRightClick={onCellRightClick}
      />
    </div>
  );
};

export { view };
