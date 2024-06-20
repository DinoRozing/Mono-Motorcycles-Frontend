export function getAllMotorcycles() {
    const motorcycles = JSON.parse(localStorage.getItem('motorcycles')) || [];
    console.log('Retrieved motorcycles:', motorcycles);
    return motorcycles;
}

export function addMotorcycle(motorcycle) {
    let motorcycles = getAllMotorcycles();
    const newId = motorcycles.length > 0 ? Math.max(...motorcycles.map(m => m.id)) + 1 : 1;
    motorcycle.id = newId;
    motorcycles.push(motorcycle);
    localStorage.setItem('motorcycles', JSON.stringify(motorcycles));
    console.log('Added motorcycle:', motorcycle);
    console.log('Updated motorcycles:', motorcycles);
}

export function deleteMotorcycle(idToDelete) {
    let motorcycles = getAllMotorcycles();
    motorcycles = motorcycles.filter(motorcycle => motorcycle.id !== idToDelete);
    localStorage.setItem('motorcycles', JSON.stringify(motorcycles));
    console.log('Deleted motorcycle with ID:', idToDelete);
    console.log('Updated motorcycles after delete:', motorcycles);
}

