//1st and 2nd Step

// Get the reference from html
const container = document.querySelector("#container");

// number of squares per row and column
const gridSize = 16;

// Loop Through and create a 16x16 grid


// The loop starts at 0 (i = 0).
// It runs while i < 16 * 16 (which is 256 iterations).
// i++ means it increments by 1 each time.
// This ensures 256 divs are created (16 rows × 16 columns).
for (let i = 0; i < gridSize * gridSize; i++) {

    // document.createElement('div') creates a new div in memory, but it’s not yet attached to the page.
    const square = document.createElement("div");

    // square.classList.add('square') assigns the class square to the div, which will be useful when we add styles later.
    square.classList.add("square");

    //container.appendChild(square) adds the newly created div (square) into the container div, making it appear on the webpage (once we style it).
    container.appendChild(square);
}

//3rd and 4th step
