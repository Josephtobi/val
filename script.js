// JavaScript (script.js)

function handleRandomMove() {
    const specialButton = document.querySelector('.special-btn');

    specialButton.addEventListener('mouseover', () => {
        setRandomMoveValues();
        moveButtonRandomly();
    });

    specialButton.addEventListener('click', () => {
        setRandomMoveValues();
        moveButtonRandomly();
    });

    document.addEventListener('mousemove', () => {
        moveButtonBackIn();
    });
}

function setRandomMoveValues() {
    const specialButton = document.querySelector('.special-btn');
    // Set random values for translation within a specified range (-1 to 1)
    specialButton.style.setProperty('--randX', Math.random() * 2 - 1);
    specialButton.style.setProperty('--randY', Math.random() * 2 - 1);
}

function moveButtonRandomly() {
    const specialButton = document.querySelector('.special-btn');
    specialButton.style.animation = 'none';
    void specialButton.offsetWidth; // Trigger reflow to restart the animation
    specialButton.style.animation = null;
}

function moveButtonBackIn() {
    const specialButton = document.querySelector('.special-btn');
    specialButton.style.animation = 'moveRandom 0.5s ease-out forwards';
}

// Initialize the random move handling
handleRandomMove();
