const gridContainer = document.querySelector('.grid-container');

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        for (let j = 1; j <= size; j++) {
            const square = document.createElement('div');
            square.style.backgroundColor = 'black';
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }
}