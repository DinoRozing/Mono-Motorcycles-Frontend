import React, { useState, useEffect } from 'react';
import './App.css';
import MotorcycleForm from './components/MotorcycleForm';
import MotorcycleTable from './components/MotorcycleTable';
import { getAllMotorcycles, addMotorcycle, deleteMotorcycle, updateMotorcycle } from './hooks/motorcycles';

function ServicePage() {
    const [motorcycles, setMotorcycles] = useState([]);
    const [motorcycleToEdit, setMotorcycleToEdit] = useState(null);

    useEffect(() => {
        const fetchMotorcycles = async () => {
            try {
                const storedMotorcycles = await getAllMotorcycles();
                setMotorcycles(storedMotorcycles);
            } catch (error) {
                console.error('Error fetching motorcycles', error);
            }
        };
        fetchMotorcycles();
    }, []);

    const handleAddMotorcycle = async (newMotorcycle) => {
        try {
            debugger;
            await addMotorcycle(newMotorcycle);
            const updatedMotorcycles = await getAllMotorcycles();
            setMotorcycles(updatedMotorcycles);
        } catch (error) {
            console.error('Error adding motorcycle', error);
        }
    };

    const handleDeleteMotorcycle = async (idToDelete) => {
        try {
            await deleteMotorcycle(idToDelete);
            const updatedMotorcycles = await getAllMotorcycles();
            setMotorcycles(updatedMotorcycles);
        } catch (error) {
            console.error('Error deleting motorcycle', error);
        }
    };

    const handleUpdateMotorcycle = async (updatedMotorcycle) => {
        try {
            await updateMotorcycle(updatedMotorcycle);
            const updatedMotorcycles = await getAllMotorcycles();
            setMotorcycles(updatedMotorcycles);
            setMotorcycleToEdit(null);
        } catch (error) {
            console.error('Error updating motorcycle', error);
        }
    };

    const handleEditClick = (motorcycle) => {
        setMotorcycleToEdit(motorcycle);
    };

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
