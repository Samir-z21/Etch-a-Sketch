// Reference to body
const container = document.querySelector("#gridContainer");

// declaring variables outside functions
let singleGrid;
let column;
let wholeGrid;
let oneColumn;

// create grid and append it
let Grid = createGrid ();
container.appendChild(Grid)

// function to create a column with 16 single grids
function createColumn () {
  column = document.createElement("div");
  column.className = 'columns';
   for (let i = 0; i <16; i++ ){
    singleGrid = document.createElement("div");
    singleGrid.className = 'singleGrids';
    column.appendChild(singleGrid);
}
return column;
}

// funciton to create a grid with 16 columns
function createGrid() {
  wholeGrid = document.createElement("div");
  wholeGrid.className = 'wholeGrids';
   for (let i = 0; i <16; i++) {
    oneColumn = createColumn ();
    wholeGrid.appendChild(oneColumn);
   }
   
   return wholeGrid;
}

// function to leave a trail on the grids
singleGrid.addEventListener("mouseover", function(){
    singleGrid.style.backgroundColor = "grey"
})