//1st and 2nd Step

// Get the reference from html
const container = document.querySelector("#container");
const resetButton = document.querySelectorAll("#reset-btn")
// number of squares per row and column
const gridSize = 16;
// Loop Through and create a 16x16 grid



// The loop starts at 0 (i = 0).
// It runs while i < 16 * 16 (which is 256 iterations).
// i++ means it increments by 1 each time.
// This ensures 256 divs are created (16 rows × 16 columns).


function grid() {
    for (let i = 0; i < gridSize * gridSize; i++) {

        // document.createElement('div') creates a new div in memory, but it’s not yet attached to the page.
        const square = document.createElement("div");
    
        // square.classList.add('square') assigns the class square to the div, which will be useful when we add styles later.
        square.classList.add("square");
    
        //container.appendChild(square) adds the newly created div (square) into the container div, making it appear on the webpage (once we style it).
        container.appendChild(square);
    }
}

grid();

//3rd and 4th step
const squares = document.querySelectorAll(".square"); // Selects all squares


// Loop through each square and add the hover effect
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';  // Set color to black on hover
    });

    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '';  // Reset to the original background color when the mouse leaves
    });
});

resetButton.addEventListener('click', () => {
    let gridSize = prompt("Enter the number of squares per side (Max: 100):") // Prompt for grid size

    //Ensure the input is a number between 1 and 100
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Remove the old grid
    container.innerHTML = "";

    //Generate the new grid
    createGrid(gridSize);

    // prompt(): Asks the user to input the number of squares per side.
    // parseInt(): Converts the input into an integer.
    // isNaN(): Checks if the input is a valid number.
    // alert(): If the input is invalid (not a number or out of range), an alert is shown.
});