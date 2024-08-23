//your JS code here. If required.
// Function to add hover effect to squares
function addHoverEffect() {
    // Select all squares
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        // Add mouseover event listener to each square
        square.addEventListener('mouseover', () => {
            squares.forEach((s) => {
                if (s !== square) {
                    s.style.backgroundColor = '#6F4E37'; // Coffee color
                }
            });
        });

        // Add mouseout event listener to revert the color
        square.addEventListener('mouseout', () => {
            squares.forEach((s) => {
                if (s !== square) {
                    s.style.backgroundColor = '#E6E6FA'; // Lavender color
                }
            });
        });
    });
}

// Call the function to apply the hover effect
addHoverEffect();
