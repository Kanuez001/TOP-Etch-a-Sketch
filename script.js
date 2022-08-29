const divNum = prompt("Enter the number of squares per side you want to use. The maximum is 100", "16");
const totalDivNum = divNum * divNum;
const container = document.querySelector(".container");
const divLength = 600/divNum;//get the appropraite div width and height depending on the number of divs per 
//side

if (divNum < 101){//Let the maximum number of squares per side be 100
    createGrid();
};

function createGrid() {//create a certain number of divs/grid
    for (let i = 0; i < totalDivNum; i++){
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.setAttribute("style", `height: ${divLength}px; width: ${divLength}px;`);

    function changeDivColor(){//change the color of a div when the cursor enters/hovers
        gridDiv.style.backgroundColor = "black";
    };
    gridDiv.addEventListener("mouseenter", changeDivColor);
    container.appendChild(gridDiv);
    }
};
