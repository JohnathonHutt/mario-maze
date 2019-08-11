//jshint esversion:6

//stores game levels in format  -  "level" + levelNum
const level1 = [
  [4, 4, 4, 4, 0, 4, 4, 0, 4, 4],
  [0, 0, 0, 0, 1, 2, 1, 0, 0, 1],
  [0, 0, 4, 0, 0, 1, 0, 0, 1, 2],
  [1, 0, 0, 0, 1, 2, 1, 0, 0, 4],
  [2, 1, 0, 4, 4, 4, 4, 4, 0, 4],
  [4, 4, 0, 1, 2, 4, 0, 0, 0, 0],
  [3, 4, 0, 0, 1, 0, 0, 0, 4, 4],
  [0, 4, 0, 0, 1, 0, 1, 0, 0, 3],
  [0, 4, 0, 1, 2, 1, 2, 1, 0, 4],
  [0, 4, 0, 0, 1, 0, 1, 4, 0, 0],
  [0, 4, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 4, 4, 5, 1, 2, 1, 0, 0, 1],
  [0, 1, 2, 1, 0, 1, 0, 0, 1, 2],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
];

const level2 = [
  [4, 4, 4, 4, 0, 4, 4, 4, 4, 4],
  [0, 0, 3, 4, 0, 0, 0, 1, 2, 1],
  [0, 0, 4, 0, 0, 1, 0, 0, 1, 2],
  [1, 0, 0, 0, 1, 2, 1, 0, 0, 4],
  [2, 1, 0, 4, 4, 4, 4, 4, 0, 4],
  [4, 4, 0, 1, 2, 4, 0, 0, 0, 3],
  [0, 4, 0, 0, 1, 0, 0, 0, 4, 4],
  [0, 0, 0, 0, 1, 0, 0, 4, 4, 4],
  [0, 4, 0, 4, 2, 1, 0, 0, 0, 4],
  [0, 4, 0, 0, 1, 0, 1, 4, 0, 0],
  [0, 4, 0, 4, 4, 1, 4, 4, 0, 0],
  [0, 4, 4, 5, 1, 2, 4, 1, 0, 0],
  [0, 1, 2, 0, 0, 1, 4, 2, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
];

const level3 = [
  [2, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 2, 2, 4, 4, 4, 3, 4],
  [0, 0, 0, 4, 2, 1, 1, 2, 1, 0],
  [0, 0, 0, 4, 1, 0, 1, 1, 0, 0],
  [5, 0, 0, 4, 0, 1, 2, 1, 0, 4],
  [0, 0, 0, 4, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 4, 4, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 4, 0, 0, 4, 4, 0, 0, 0, 1],
  [2, 1, 0, 0, 4, 4, 0, 0, 1, 2],
  [1, 0, 0, 1, 2, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
];

const level4 = [
  [0, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [0, 4, 3, 3, 4, 0, 0, 0, 0, 1],
  [0, 4, 3, 3, 4, 1, 0, 0, 1, 2],
  [0, 4, 3, 4, 4, 2, 1, 0, 0, 4],
  [0, 4, 1, 2, 1, 4, 4, 0, 0, 4],
  [0, 4, 0, 1, 2, 1, 0, 0, 0, 3],
  [0, 4, 0, 0, 1, 0, 0, 0, 4, 4],
  [0, 4, 0, 0, 1, 0, 0, 4, 4, 4],
  [0, 4, 0, 4, 2, 1, 0, 0, 0, 4],
  [0, 4, 0, 0, 1, 0, 1, 2, 0, 0],
  [0, 4, 0, 4, 4, 1, 4, 4, 0, 0],
  [0, 4, 4, 5, 1, 2, 4, 1, 0, 0],
  [0, 1, 2, 0, 0, 1, 0, 2, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
];

const levels = [level1, level2, level3, level4];


//game state variables
const title = document.getElementById("title");

let tries = 3;

let score = 0;

let levelNum = 1;

const flippedTiles = [];


function updateGameState() {
  title.innerHTML = "Mario Maze<br>" + "Level: " + levelNum + "<br>" + " Tries: " + tries + "<br>" + " Score: " + score;
}

updateGameState();


//game board variables
let currentLevel = levels[levelNum - 1];

let width = currentLevel[0].length - 1;

let height = currentLevel.length - 1;


//generate game boards
const styles = ["white", "red", "shell", "mushroom", "block", "boo"];

function generateBoard(level) {
  for (i = 0; i < level.length; i++) {
    for (j = 0; j < level[i].length; j++) {
      let tile = document.createElement("div");
      document.getElementById("game-container").appendChild(tile);
      tile.setAttribute("class", "tile " + styles[level[i][j]] + " question");
      tile.setAttribute("id", i.toString() + "-" + j.toString());
    }
  }
}

generateBoard(currentLevel);


let tiles = document.getElementsByClassName("tile");

function addTileListener() {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", function(event) {
      let tile = event.target;
      let id = tiles[i].id;

      let rowCol = id.split('-');
      let row = Number(rowCol[0]);
      let col = Number(rowCol[1]);

      checkAdjacentTiles(tile, row, col);
      checkGameOver();
    });
  }
}

addTileListener();
toggleNoShowTiles();


const instruction = document.getElementById("instructions");

instructions.addEventListener("click", function() {
  //hide instructions, reveal tiles
  toggleNoShowInstructions();
  toggleNoShowTiles();
});


title.addEventListener("click", function() {
  //hide tiles, reveal instructions
  toggleNoShowInstructions();
  toggleNoShowTiles();
});


//hides and unhides game boards well preserving game/tile state
function toggleNoShowTiles() {
  for (let i = 0; i < currentLevel.length; i++) {
    for (let j = 0; j < currentLevel[0].length; j++) {
      document.getElementById(i + "-" + j).classList.toggle("tile");
      document.getElementById(i + "-" + j).classList.toggle("noShow");
    }
  }
}


//hides and unhides instructions
function toggleNoShowInstructions() {
  instructions.classList.toggle("instructions");
  instructions.classList.toggle("noShow");
}


function flipTile(tile) {
  tile.classList.remove("question");
  flippedTiles.push(tile);
}


function checkForward(tile, row, col) {
  let forward = String(row + 1) + "-" + String(col);
  forward = document.getElementById(forward);
  //left out first row special case make it global

  //no exceptions for moving forward
  if (!forward.classList.contains("question") && !forward.classList.contains("block")) {
    checkBoardsItems(tile);
    flipTile(tile);
    //checkIfLevelIsComplete();
  }
}


function checkLevelFinished(tile, row, col) {
  //a special case variant of checkForward for checking the top row
  let forward = String(row + 1) + "-" + String(col);
  forward = document.getElementById(forward);
  //left out first row special case make it global

  //no exceptions for moving forward
  if (!forward.classList.contains("question") && !forward.classList.contains("block")) {
    checkBoardsItems(tile);
    flipTile(tile);
    levelComplete(tile);
  }
}


function checkBack(tile, row, col) {
  let back = String(row - 1) + "-" + String(col);
  back = document.getElementById(back);
  //left out first row put it global

  //no eceptions for moving back
  if (!back.classList.contains("question") && !back.classList.contains("block")) {
    checkBoardsItems(tile);
    flipTile(tile);
    //checkIfLevelIsComplete();
  }
}


function checkRight(tile, row, col) {
  let right = String(row) + "-" + String(col + 1);
  right = document.getElementById(right);
  //left out first row put it global

  //exception right edge of board can't look right
  if (col !== width) {
    //I might be mixing things up look here if console.error
    if (!right.classList.contains("question") && !right.classList.contains("block")) {
      checkBoardsItems(tile);
      flipTile(tile);
    }
  }
}


function checkLeft(tile, row, col) {
  let left = String(row) + "-" + String(col - 1);
  left = document.getElementById(left);
  //left out first row put it global

  //can't look left when col === 0
  if (col !== 0) {
    //I might be mixing things up look here if console.error
    if (!left.classList.contains("question") && !left.classList.contains("block")) {
      checkBoardsItems(tile);
      flipTile(tile);
    }
  }
}


function checkBoardsItems(tile) {
  if (tile.classList.contains("mushroom") && tile.classList.contains("question")) {
    tries += 1;
    score += 10;
    playSound("one_up");
    updateGameState();
  } else if (tile.classList.contains("shell") && tile.classList.contains("question")) {
    tries -= 1;
    playSound("shrink");
    updateGameState();
  } else if (tile.classList.contains("boo")) {
    setTimeout(unShowBoardBoo, 1000);
    playSound("boo");
  } else if (tile.classList.contains("block")) {
    playSound("bump");
  } else if (tile.classList.contains("question")){
    playSound("map_travel");
  }
  updateGameState();
}


function checkAdjacentTiles(tile, row, col) {
  if (row === height) {
    //bottom row - all tiles can be flipped
    checkBoardsItems(tile);
    flipTile(tile);
  } else if (row === 0) {
    checkLevelFinished(tile, row, col);
  } else {
    checkForward(tile, row, col);
    checkBack(tile, row, col);
    checkRight(tile, row, col);
    checkLeft(tile, row, col);
  }
}


function unShowBoardBoo() {
  flippedTiles.reverse();
  let timeDelay = 0;
  for (let i = 0; i < flippedTiles.length; i++) {
    setTimeout(function() {
      flippedTiles[i].classList.add("question");
    }, timeDelay);
    timeDelay += 60;
  }
  setTimeout(function() {
    flippedTiles.length = 0;
  }, timeDelay + 200);
}


function checkGameOver() {
  //resets initial game state
  if (tries < 1) {
    playSound("game_over");
    setTimeout(showGameOverScreen, 1200);
  }
}


function showGameOverScreen() {
  deleteCurrentBoardFast();
  let gameOverScreen = document.createElement("h2");
  gameOverScreen.innerHTML = "GAME OVER<br>CLICK TO PLAY AGAIN";
  gameOverScreen.setAttribute("id", "gameOverScreen");
  gameOverScreen.classList.add("gameOverScreen");
  title.after(gameOverScreen);
  gameOverScreen.addEventListener("click", function() {
    console.log("game over screen clicked");
    restartGame();
  });
}


function restartGame() {
  //rest game state
  levelNum = 1;
  currentLevel = levels[levelNum - 1];
  width = currentLevel[0].length - 1;
  height = currentLevel.length - 1;
  tries = 3;
  score = 0;
  updateGameState();
  //delete Game over screen
  document.getElementById("gameOverScreen").remove();
  setTimeout(function() {
    generateBoard(currentLevel);
    tiles = document.getElementsByClassName("tile");
    addTileListener();
  }, 500);
}


function levelComplete(tile) {
  if (!tile.classList.contains("block")) {
    playSound("one_up");
    tries += 1;
    updateGameState();
    setTimeout(function() {
      playSound("one_up");
      tries += 1;
      updateGameState();
    }, 800);

    setTimeout(function() {
      playSound("levelClear");
      if (levelNum === levels.length) {
        gameWon();
      } else {
        levelNum += 1;
        updateScore();
        loadLevel();
      }
    }, 1600);
  }
}


function gameWon() {
  if (levelNum === levels.length) {
    console.log("They's the sames");
    deleteCurrentBoardFast();
    let gameOverScreen = document.createElement("h2");
    gameOverScreen.innerHTML = "You beat all the levels!<br>Great work!<br>CLICK TO PLAY AGAIN";
    gameOverScreen.setAttribute("id", "gameOverScreen");
    gameOverScreen.classList.add("gameOverScreen");
    title.after(gameOverScreen);
    repeatSounds("coin", 10, 200);
    gameOverScreen.addEventListener("click", function() {
      console.log("game over screen clicked");
      restartGame();
    });
  }
}


function repeatSounds(sound, repeatNum, interval) {
  let time = 0;
  for (let i=0; i < repeatNum; i++) {
    setTimeout(function() {
      playSound(sound);
    }, time);
    time += interval;
  }
}


function loadLevel() {
  updateGameState();
  deleteCurrentBoardFast();
  setTimeout(function() {
    generateBoard(levels[levelNum - 1]);
    tiles = document.getElementsByClassName("tile");
    addTileListener();
  }, 2500);
}


function updateScore() {
  //the fewer tiles used the higher the score (total tiles - tiles used)
  let spacesUsed = 0;
  for (let i = 0; i < tiles.length; i++) {
    if (!tiles[i].classList.contains("question")) {
      spacesUsed += 1;
    }
  }
  score += (140 - spacesUsed);
  updateGameState();
}


//deletes tiles without any effects - unlike deleteCurrentBoard()
function deleteCurrentBoardFast() {
  for (let i = 0; i < currentLevel.length; i++) {
    for (let j = 0; j < currentLevel[0].length; j++) {
      document.getElementById(i + "-" + j).remove();
    }
  }
  flippedTiles.length = 0;
}


//plays sounds...
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".wav");
  audio.play();
}


//helper function for verifying level design
function showBoard() {
  for (i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove("question");
  }
}


//helper funtion for level design
function loadAndShowLevel(levelNum) {
  deleteCurrentBoardFast();
  generateBoard(levels[levelNum - 1]);
  tiles = document.getElementsByClassName("tile");
  addTileListener();
  showBoard();
}
