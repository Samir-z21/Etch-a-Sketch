// Reference to body
const container = document.querySelector("#gridContainer");

// declaring variables outside functions
let singleSquare;
let column;
let wholeGrid;
let squares = [];

// create grid and append it
wholeGrid = createGrid ();
container.appendChild(wholeGrid)

// funciton to create a grid with 16 columns
function createGrid() {
  wholeGrid = document.createElement("div");
  wholeGrid.className = 'wholeGrids';
   for (let i = 0; i <16; i++) {
    column = createColumn ();
    wholeGrid.appendChild(column);
   }
   
   return wholeGrid;
}
// function to create a column with 16 single grids
function createColumn () {
  column = document.createElement("div");
  column.className = 'columns';
   for (let i = 0; i <16; i++ ){
    singleSquare = document.createElement("div");
    singleSquare.className = 'singleSquares';
    column.appendChild(singleSquare);
    squares.push(singleSquare);
}
return column
}



// code for changing square colors while hovering
function changeColor(square) {
  square.style.backgroundColor = "grey";
}

squares.forEach((square) => {
  square.addEventListener('mousemove', () => {
    changeColor(square)
  });
});

