const board = document.getElementById('game-area');
const context = board.getContext('2d');

const snake = {
  segmentSize: 16,
  position: { x: 0, y: 0 }
};

context.fillStyle = "rgb(255,255,255)"
context.fillRect(
  // snake.position.x, 
  // snake.position.y, 
  (context.canvas.width / 2) - snake.segmentSize,
  (context.canvas.height / 2) - snake.segmentSize,
  snake.segmentSize, 
  snake.segmentSize
);

const handleKeyDown = event => {
  if (!event.key.includes('Arrow')) return;

  switch (event.key) {
    case 'ArrowUp': 
      SNAKE.position.y -= 1;
      break;
    case 'ArrowDown':
      SNAKE.position.y += 1;
      break;
    case 'ArrowLeft': 
      SNAKE.position.x += 1;
      break;
    case 'ArrowRight': 
      SNAKE.position.x -= 1;
      break;
    default:
      console.log('not a valid move!');
      break;
  }
};

window.addEventListener('keydown', handleKeyDown);

