// Get the button and color info elements
const colorButton = document.getElementById('colorButton');
const colorInfo = document.getElementById('colorInfo');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to determine if a color is light or dark
function isLightColor(color) {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate brightness using the formula
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness > 155;
}

// Add click event listener to the button
colorButton.addEventListener('click', function () {
    const newColor = getRandomColor();

    // Change button background color
    colorButton.style.backgroundColor = newColor;

    // Adjust text color based on background brightness
    if (isLightColor(newColor)) {
        colorButton.style.color = '#333';
    } else {
        colorButton.style.color = '#fff';
    }

    // Display the color code
    colorInfo.textContent = `Current Color: ${newColor}`;

    // Add a small animation effect
    colorButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        colorButton.style.transform = 'scale(1)';
    }, 100);
});
