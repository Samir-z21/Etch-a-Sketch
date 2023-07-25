// Reference to body
const container = document.querySelector("#gridContainer");

// declaring variables outside functions
  // variables for the grid
  let singleSquare;
  let column;
  let wholeGrid;
  // variables for the hovering feature
  let squares = [];
  let numberOfSquares = 16;
  // variables for gridChanges
  let regular = true;
  let gridChangedSmall = false;
  let gridChangedMedium = false;
  let gridChangedBig = false;

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
     if (regular) {
      singleSquare.classList.add('singleSmallSquares')
     } 
      else if (gridChangedSmall) {
      singleSquare.classList.add('singleSmallSquares')
     } 
     else if (gridChangedMedium) {
      singleSquare.classList.add('singleMediumSquares')
     } 
     else if (gridChangedBig) {
      singleSquare.classList.add('singleBigSquares')
     }
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
        gridChangedSmall = true;
        gridChangedMedium = false;
        gridChangedBig = false;
        //reseting everything for the new grid
        container.removeChild(wholeGrid);
        squares.length = 0;
        regular = false;
        createGrid();   
      }

      if(e.target.innerText === "Medium") {
        numberOfSquares = 32;
        gridChangedSmall = false;
        gridChangedMedium = true;
        gridChangedBig = false;
        //reseting everything for the new grid
        container.removeChild(wholeGrid);
        squares.length = 0;
        regular = false;
        createGrid();   
      }

      if(e.target.innerText === "Big") {
        numberOfSquares = 64
        gridChangedSmall = false;
        gridChangedMedium = false;
        gridChangedBig = true;
        //reseting everything for the new grid
        container.removeChild(wholeGrid);
        squares.length = 0;
        regular = false;
        createGrid(); 
      }
    })
  });