const container = document.querySelector(".container");

function createGrid() {//create a certain number of divs/grid
    for (let i = 0; i < 256; i++){
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    container.appendChild(gridDiv);
    }
};

createGrid();


