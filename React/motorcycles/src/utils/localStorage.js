export function getAllMotorcycles() {
    const motorcycles = JSON.parse(localStorage.getItem('motorcycles')) || [];
    return motorcycles;
};

export function addMotorcycle(motorcycle) {
    let motorcycles = getAllMotorcycles();
    motorcycle.id = motorcycles.length > 0 ? motorcycles[motorcycles.length - 1].id + 1 : 1;
    motorcycles.push(motorcycle);
    localStorage.setItem('motorcycles', JSON.stringify(motorcycles));
};

export function deleteMotorcycle(idToDelete) {
    let motorcycles = getAllMotorcycles();
    motorcycles = motorcycles.filter(motorcycle => motorcycle.id !== idToDelete);
    localStorage.setItem('motorcycles', JSON.stringify(motorcycles));
};
