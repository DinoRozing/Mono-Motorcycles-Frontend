import React, { useState, useEffect } from 'react';
import './App.css';
import MotorcycleForm from './components/MotorcycleForm';
import MotorcycleTable from './components/MotorcycleTable';
import { getAllMotorcycles, addMotorcycle, deleteMotorcycle, updateMotorcycle } from './utils/localStorage';

function ServicePage() {
    const [motorcycles, setMotorcycles] = useState([]);
    const [motorcycleToEdit, setMotorcycleToEdit] = useState(null);

    useEffect(() => {
        const storedMotorcycles = getAllMotorcycles();
        setMotorcycles(storedMotorcycles);
    }, []);

    function handleAddMotorcycle(newMotorcycle) {
        addMotorcycle(newMotorcycle);
        const updatedMotorcycles = getAllMotorcycles();
        setMotorcycles(updatedMotorcycles);
    }

    function handleDeleteMotorcycle(idToDelete) {
        deleteMotorcycle(idToDelete);
        const updatedMotorcycles = getAllMotorcycles();
        setMotorcycles(updatedMotorcycles);
    }

    function handleUpdateMotorcycle(updatedMotorcycle) {
        updateMotorcycle(updatedMotorcycle);
        const updatedMotorcycles = getAllMotorcycles();
        setMotorcycles(updatedMotorcycles);
        setMotorcycleToEdit(null);
    }

    function handleEditClick(motorcycle) {
        setMotorcycleToEdit(motorcycle);
    }

    return (
        <div>
            <header className="navbar">
                <div className="logo">
                    <a href="/">Motorcycles</a>
                </div>
                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
            <main>
                <h1>Services</h1>
                <section className="services-container">
                    <div className="form-card">
                        <h2>{motorcycleToEdit ? "Update Motorcycle" : "Add Motorcycle"}</h2>
                        <MotorcycleForm 
                            onAddMotorcycle={handleAddMotorcycle} 
                            onUpdateMotorcycle={handleUpdateMotorcycle}
                            motorcycleToEdit={motorcycleToEdit}
                        />
                    </div>
                    <div className="table-container">
                        <h2>Motorcycle List</h2>
                        <MotorcycleTable 
                            motorcycles={motorcycles} 
                            onDeleteMotorcycle={handleDeleteMotorcycle}
                            onEditMotorcycle={handleEditClick}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ServicePage;
