const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const dimensions = document.querySelector('.dimensions');
const reset = document.querySelector('.reset-button');
const rainbow = document.querySelector('.rainbow');
const GRIDSIZE = 480;
const DEFAULT_GRID_VALUE = 16;
const DEFAULT_COLOR_MODE = 'black';

let colorMode = DEFAULT_COLOR_MODE;

function drawGrid(dimension) {
    cellSize = GRIDSIZE / dimension;
    for (let i = 1; i <= dimension; i++) {
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
        for (let j = 1; j <= dimension; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.style.backgroundColor = 'white';
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = pickColor();
            });
            gridRow.appendChild(cell);
        }
        gridContainer.appendChild(gridRow);
    }
}

function resetGrid() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.style.backgroundColor = 'white';
    }
}

function updateDimensions() {
    dimensions.innerHTML = `Grid size: ${slider.value} x ${slider.value}`;
}

function removeAll() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

function pickColor() {
    if (colorMode == 'black') {
        return 'black';
    }
    else if (colorMode == 'rainbow') {
        return generateRandomColor();
    }
}

function switchColorMode() {
    if (colorMode == 'black') { 
        colorMode = 'rainbow';
        rainbow.classList.add('active');
    }
    else { 
        colorMode = 'black';
        rainbow.classList.remove('active');
    }
}

function initialize() {
    slider.value = DEFAULT_GRID_VALUE;
    updateDimensions();
    reset.addEventListener('click', () => resetGrid());
    rainbow.addEventListener('click', () => switchColorMode());
    slider.oninput = function () {
        updateDimensions();
        removeAll();
        drawGrid(this.value);
    }
    drawGrid(slider.value);
}

initialize();