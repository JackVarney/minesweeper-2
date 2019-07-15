export interface MinesweeperGridCell {
  hasMine: boolean;
  revealed: boolean;
  point: {
    x: number;
    y: number;
  };
}
