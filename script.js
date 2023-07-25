// Reference to body
const container = document.querySelector("#gridContainer");

// declaring variables outside functions
let singleSquare;
let column;
let wholeGrid;
let squares = [];
let numberOfSquares = 16;

// create grid and append it
createGrid()

// funciton to create a grid with 16 columns
function createGrid() {
  wholeGrid = document.createElement("div");
  wholeGrid.className = 'wholeGrid';
   for (let i = 0; i <numberOfSquares; i++) {
    let oneColumn = createColumn ();
    wholeGrid.appendChild(oneColumn);
   }
   container.appendChild(wholeGrid)

   // function for changing square colors while hovering
   squares.forEach((square) => {
    square.addEventListener('mousemove', () => {
    changeColor(square)
    });
    });
    
  function changeColor(square) {
  square.style.backgroundColor = "grey";
}
   
}
// function to create a column with 16 single squares
function createColumn () {
  column = document.createElement("div");
  column.className = 'columns';
   for (let i = 0; i <numberOfSquares; i++ ){
    singleSquare = document.createElement("div");
    singleSquare.className = 'singleSquares';
    column.appendChild(singleSquare);
    squares.push(singleSquare);
}
return column
}






// Code to change grid density
const density = document.querySelectorAll("#density");
density.forEach(button => {
    button.addEventListener('click', function(e) {
      if(e.target.innerText === "Small") {
        numberOfSquares = 16;
        container.removeChild(wholeGrid);
        squares.length = 0;
        const elementsToRemove = document.querySelectorAll(".columns, .wholeGrid, .singleSquares"); 
        elementsToRemove.forEach(element => {
        element.remove();
        });
        createGrid();   
      }

      if(e.target.innerText === "Medium") {
        numberOfSquares = 32
        container.removeChild(wholeGrid);
        wholeGrid.removeChild(oneColumn);
        column.removeChild(singleSquare)
        squares.length = 0;
        createGrid();
        
      }

      if(e.target.innerText === "Big") {
        numberOfSquares = 64
      
      }
    })
  });