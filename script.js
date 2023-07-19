// Reference to body
const container = document.querySelector("#gridContainer");

function createColumn () {
  let column = document.createElement("div");
  column.className = 'columns';
   for (let i = 0; i <16; i++ ){
    let singleGrid = document.createElement("div");
    singleGrid.className = 'singleGrids';
    column.appendChild(singleGrid);
}
return column;
}

function createGrid() {
  let wholeGrid = document.createElement("div");
  wholeGrid.className = 'wholeGrids';
   for (let i = 0; i <16; i++) {
    let oneColumn = createColumn ();
    wholeGrid.appendChild(oneColumn);
   }
   
   return wholeGrid;
}
let Grid = createGrid ();
container.appendChild(Grid)