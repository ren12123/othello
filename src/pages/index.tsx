import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 1],
    [0, 0, 0, 2, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 2, 1, 2, 1],
    [0, 2, 1, 2, 1, 2, 1, 2],
  ]);
  const [turnColor, setTurnColor] = useState(1);
  const clickCell = (x: number, y: number) => {
    const newBoard = structuredClone(board);
    if (newBoard[y][x] === 0) {
     for (let distance = 1; distance < 8; distance++) {
      if (newBoard[y + distance] === undefined) {
        break;
      } else {
        if (newBoard[y + distance][x] === undefined) {
          break;
        } else if (newBoard[y + distance][x] === 0) {
          break;
      } else if (newBoard[y + distance][x] === turnColor) {
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3-turnColor);
        break;
      } else if
     }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ backgroundColor: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
