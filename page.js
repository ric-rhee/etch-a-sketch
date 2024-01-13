const gridContainer = document.querySelector('.grid-container');

function drawGrid(dimension) {
    for (let i = 1; i <= dimension; i++) {
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
        for (let j = 1; j <= dimension; j++) {
            const cell = document.createElement('div');
            cell.style.backgroundColor = 'white';
            cell.style.width = '18px';
            cell.style.height = '18px';
            cell.style.margin = '1px';
            gridRow.appendChild(cell);
        }
        gridContainer.appendChild(gridRow);
    }
}

drawGrid(16);