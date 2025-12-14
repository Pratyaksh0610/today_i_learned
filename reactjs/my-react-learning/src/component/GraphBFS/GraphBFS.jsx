import { useState } from "react";
import styles from "./GraphBFS.module.css";

function createGrid(rr = 3, cc = 3) {
  const grid = [];
  for (let r = 0; r < rr; r++) {
    const row = [];
    for (let c = 0; c < cc; c++) {
      row.push("white");
    }
    grid.push(row);
  }
  return grid;
}

const ROWS = 5;
const COLS = 5;

export default function GraphBFS() {
  const [grid, setGrid] = useState(createGrid(ROWS, COLS));
  const toggleColor = function (color) {
    return color === "white" ? "blue" : "white";
  };
  const handleClick = function (row, col) {
    setGrid((prevGrid) => {
      //   const newGrid = prevGrid;
      const newGrid = prevGrid.map((row) => [...row]);
      const newwGrid = prevGrid;
      console.log(newwGrid === prevGrid, "Same reference so might not re-render");
      console.log(newGrid === prevGrid, "GOAT, always re-renders");
      newGrid[row][col] = "blue";

      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
      directions.forEach(([dr, dc]) => {
        const nr = row + dr;
        const nc = col + dc;

        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
          newGrid[nr][nc] = toggleColor(newGrid[nr][nc]);
        }
      });
      return newGrid;
    });
  };
  return (
    <div className={styles.grid}>
      {grid.map(function (row, rIdx) {
        return row.map(function (cell, cIdx) {
          return (
            <div
              className={`${styles.cell} ${styles[cell]} `}
              onClick={() => handleClick(rIdx, cIdx)}
            ></div>
          );
        });
      })}
    </div>
  );
}
