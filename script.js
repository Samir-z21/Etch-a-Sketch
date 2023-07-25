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
  let currentClass = 'singleSmallSquares';
  // variables for color changes
  let currentColor = 'grey';

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

  // adding hovering effect
    squares.forEach((square) => {
      square.addEventListener('mousemove', () => {
      changeColor(square,currentColor)
      });
    });
    
   // function to change color
    function changeColor(square, currentColor) {
      square.style.backgroundColor = currentColor;
    }
}



// function to create a column with 16 single squares
function createColumn () {
  column = document.createElement("div");
  column.className = 'columns';
   for (let i = 0; i <numberOfSquares; i++ ){
    singleSquare = document.createElement("div");
    singleSquare.classList.add(currentClass);
    column.appendChild(singleSquare);
    squares.push(singleSquare);
  }
return column
}


// Code to change grid density and/or clear grid
const buttons = document.querySelectorAll("#buttons");
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      if(e.target.innerText === "Small") {
        numberOfSquares = 16;
        currentClass = 'singleSmallSquares'
        //reseting everything for the new grid
        container.removeChild(wholeGrid);
        squares.length = 0;
        createGrid();   
      }

      if(e.target.innerText === "Medium") {
        numberOfSquares = 32;
        currentClass = 'singleMediumSquares'
        //reseting everything for the new grid
        container.removeChild(wholeGrid);
        squares.length = 0;
        createGrid();   
      }

      if(e.target.innerText === "Big") {
        numberOfSquares = 64
        currentClass = 'singleBigSquares'
        //reseting everything for the new grid
        container.removeChild(wholeGrid);
        squares.length = 0;
        createGrid(); 
      }

      if(e.target.innerText === "Clear") {
        //reseting everything for the new grid
        container.removeChild(wholeGrid);
        squares.length = 0;
        createGrid(); 
      }

      if(e.target.innerText === "Rainbow") {

      }
    })
  });

  // code to input user color
  const colorPicker = document.querySelector('#colorPicker');
  colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
  });
