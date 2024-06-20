document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.submit-btn');
    const makeInput = document.getElementById('make-label');
    const modelInput = document.getElementById('model-label');
    const yearInput = document.getElementById('year-label');
    const motorcycleTableBody = document.getElementById('motorcycleTableBody');
    let currentId = 0;

    let motorcycles = JSON.parse(localStorage.getItem('motorcycles')) || [];

        fillTable();    

    addButton.addEventListener('click', function(event) {
        event.preventDefault();
    
        const makeInput = document.getElementById('make');
        const modelInput = document.getElementById('model');
        const yearInput = document.getElementById('year');
    
        if (!makeInput || !modelInput || !yearInput) {
            console.error('One or more input elements are missing!');
            return;
        }
    
        const make = makeInput.value.trim();
        const model = modelInput.value.trim();
        const year = yearInput.value.trim();
    
        if (!make || !model || !year) {
            alert('Please fill out all the fields!');
            return;
        }
    
        currentId++;
    
        const newMotorcycle = {
            id: currentId,
            make: make,
            model: model,
            year: year
        };
    
        motorcycles.push(newMotorcycle);
    
        localStorage.setItem('motorcycles', JSON.stringify(motorcycles));
    
        fillTable();
    
        makeInput.value = '';
        modelInput.value = '';
        yearInput.value = '';
    });

    motorcycleTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            const idToDelete = parseInt(row.firstElementChild.textContent);

            motorcycles = motorcycles.filter(motorcycle => motorcycle.id !== idToDelete);

            localStorage.setItem('motorcycles', JSON.stringify(motorcycles));

            fillTable();
        }
    });
});

// FUNCTIONS

function fillTable() {
    motorcycleTableBody.innerHTML = '';
    motorcycles.forEach(motorcycle => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${motorcycle.id}</td>
            <td>${motorcycle.make}</td>
            <td>${motorcycle.model}</td>
            <td>${motorcycle.year}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        motorcycleTableBody.appendChild(row);
    });
};