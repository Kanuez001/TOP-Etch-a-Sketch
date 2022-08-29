const container = document.querySelector(".container");

function createGrid() {//create a certain number of divs/grid
    for (let i = 0; i < 256; i++){
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    //gridDiv.textContent = "empty";

    function changeDivColor(){//change the color of a div when the cursor enters/hovers
        gridDiv.style.backgroundColor = "black";
    };
    gridDiv.addEventListener("mouseenter", changeDivColor);
    container.appendChild(gridDiv);
    }
};

createGrid();

