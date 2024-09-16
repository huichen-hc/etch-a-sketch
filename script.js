const container = document.querySelector('.container');

// Use nested loops and Flexbox to create the grid. One row is a smaller container for multiple columns
function getGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }

        container.appendChild(row);
    }
}


//Set up a “hover” effect so that the grid divs change color when mouse passes over them
function applyHoverEffect() {
    const hoverEffect = document.querySelectorAll(".column"); //columns make up the individual cells in the grid. One row inclues many cells so we cannot choose "row" as element to set hover effect.
    hoverEffect.forEach(gridCell => {
        gridCell.addEventListener("mouseover", function () {
            this.style.backgroundColor = "rgb(251,198,207)";
        });
    });
}

//remove the existing grid
function clearGrid() {
    container.innerHTML = '';
}


// user can click the button to change the size of the grid
const gridBtn = document.querySelector('.gridBtn');

gridBtn.addEventListener("click", function () {
    let userInput = prompt("How many squares per side do you want for the new grid? Please input a number (Max 100).");

    // Check if the user clicked "Cancel"
    if (userInput === null) return;  // Exit the function if the user cancels
    userInput = Number(userInput);

    // Loop continues until a valid input is provided
    while (isNaN(userInput) || userInput < 1 || userInput > 100) {
        userInput = prompt("Invalid input. Please enter a number between 1 and 100.");
        if (userInput === null) return; // Exit if the user clicked "Cancel"
        userInput = Number(userInput);
    }
    // Creat a new grid based on a valid userinput
    if (userInput >= 1 && userInput <= 100) {
        clearGrid();
        getGrid(userInput);
        applyHoverEffect();
    }
});

getGrid(16);
applyHoverEffect();


