document.addEventListener('DOMContentLoaded', function() {
    fetch('catalogo.json')
        .then(response => response.json())
        .then(data => {
            displayCatalog(data);
        });

    function displayCatalog(data) {
        for (const category in data) {
            const lista = document.getElementById(`${category}-lista`);
            data[category].forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <p>Preço: ${item.valor}</p>
                `;
                lista.appendChild(div);
            });
        }
    }
});