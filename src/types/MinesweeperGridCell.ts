export interface MinesweeperGridCell {
  hasMine: boolean;
  hasFlag: boolean;
  revealed: boolean;
  point: {
    x: number;
    y: number;
  };
}
