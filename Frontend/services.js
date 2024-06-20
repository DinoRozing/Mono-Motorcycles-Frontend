let motorcycles = JSON.parse(localStorage.getItem('motorcycles')) || [];
let currentId = motorcycles.length > 0 ? motorcycles[motorcycles.length - 1].id : 0;

function fillTable() {
    const motorcycleTableBody = document.getElementById('motorcycleTableBody');
    motorcycleTableBody.innerHTML = '';
    motorcycles.forEach(motorcycle => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${motorcycle.id}</td>
            <td>${motorcycle.make}</td>
            <td>${motorcycle.model}</td>
            <td>${motorcycle.year}</td>
            <td>
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        motorcycleTableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.submit-btn');
    const makeInput = document.getElementById('make-label');
    const modelInput = document.getElementById('model-label');
    const yearInput = document.getElementById('year-label');
    const motorcycleTableBody = document.getElementById('motorcycleTableBody');

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

        if (event.target.classList.contains('update-btn')) {
            const row = event.target.closest('tr');
            const idToUpdate = parseInt(row.firstElementChild.textContent);
            const motorcycle = motorcycles.find(motorcycle => motorcycle.id === idToUpdate);

            document.getElementById('make').value = motorcycle.make;
            document.getElementById('model').value = motorcycle.model;
            document.getElementById('year').value = motorcycle.year;

            addButton.textContent = 'Update';

            addButton.removeEventListener('click', addMotorcycle);
            addButton.addEventListener('click', function updateMotorcycle(event) {
                event.preventDefault();

                motorcycle.make = document.getElementById('make').value.trim();
                motorcycle.model = document.getElementById('model').value.trim();
                motorcycle.year = document.getElementById('year').value.trim();

                localStorage.setItem('motorcycles', JSON.stringify(motorcycles));
                fillTable();

                document.getElementById('make').value = '';
                document.getElementById('model').value = '';
                document.getElementById('year').value = '';
                
                addButton.textContent = 'Add';
                addButton.removeEventListener('click', updateMotorcycle);
                addButton.addEventListener('click', addMotorcycle);
            });
        }
    });

    function addMotorcycle(event) {
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
    }

    addButton.addEventListener('click', addMotorcycle);
});
