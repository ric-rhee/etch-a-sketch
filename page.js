const gridContainer = document.querySelector('.grid-container');
var slider = document.querySelector('.slider');
var dimensions = document.querySelector('.dimensions');
const reset = document.querySelector('.reset-button');
dimensions.innerHTML = slider.value;

function drawGrid(dimension) {
    for (let i = 1; i <= dimension; i++) {
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
        for (let j = 1; j <= dimension; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.style.backgroundColor = 'white';
            cell.style.width = '18px';
            cell.style.height = '18px';
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

slider.oninput = function() {
    dimensions.innerHTML = this.value;
}

reset.addEventListener('click', () => {
    resetGrid();
});

drawGrid(16);