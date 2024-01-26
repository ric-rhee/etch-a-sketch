const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const dimensions = document.querySelector('.dimensions');
const reset = document.querySelector('.reset-button');
const GRIDSIZE = 480;

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
                cell.style.backgroundColor = 'black';
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

slider.value = 16;
updateDimensions();
reset.addEventListener('click', () => resetGrid());
slider.oninput = function() {
    updateDimensions();
    removeAll();
    drawGrid(this.value);
}

drawGrid(16);