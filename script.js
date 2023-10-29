// Tabelle sortieren
function sortTable(columnIndex) {
    const table = document.getElementById('co2-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[columnIndex].textContent;
        const cellB = rowB.querySelectorAll('td')[columnIndex].textContent;
        return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// Tabelle filtern
function filterTable(searchTerm, columnIndex) {
    const table = document.getElementById('co2-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.forEach(row => {
        const cellText = row.querySelectorAll('td')[columnIndex].textContent;
        if (cellText.toLowerCase().includes(searchTerm.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Event-Listener für Sortierung und Filterung hinzufügen
const headers = Array.from(document.querySelectorAll('#co2-table th'));

headers.forEach((header, index) => {
    header.addEventListener('click', () => sortTable(index));

    const input = document.createElement('input');
    input.placeholder = 'Filtern';
    input.addEventListener('input', (event) => {
        filterTable(event.target.value, index);
    });
    header.appendChild(input);
});