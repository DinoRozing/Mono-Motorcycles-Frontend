import React, { useRef, useEffect } from 'react';
import './css/MotorcycleForm.css';

function MotorcycleForm({ onAddMotorcycle, onUpdateMotorcycle, motorcycleToEdit }) {
    const makeRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();

    useEffect(() => {
        if (motorcycleToEdit) {
            makeRef.current.value = motorcycleToEdit.make;
            modelRef.current.value = motorcycleToEdit.model;
            yearRef.current.value = motorcycleToEdit.year;
        } else {
            makeRef.current.value = '';
            modelRef.current.value = '';
            yearRef.current.value = '';
        }
    }, [motorcycleToEdit]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const make = makeRef.current.value.trim();
        const model = modelRef.current.value.trim();
        const year = yearRef.current.value.trim();

        if (!make || !model || !year) {
            alert('Please fill out all fields!');
            return;
        }

        const motorcycle = { 
            id: motorcycleToEdit ? motorcycleToEdit.id : Date.now(), 
            make, 
            model, 
            year 
        };

        if (motorcycleToEdit) {
            onUpdateMotorcycle(motorcycle);
        } else {
            onAddMotorcycle(motorcycle);
        }

        makeRef.current.value = '';
        modelRef.current.value = '';
        yearRef.current.value = '';
    };

    return (
        <div className="motorcycle-form">
            <form onSubmit={handleSubmit}>
                <input type="text" ref={makeRef} placeholder="Make" required />
                <input type="text" ref={modelRef} placeholder="Model" required />
                <input type="number" ref={yearRef} placeholder="Year" required />
                <button type="submit">{motorcycleToEdit ? "Update" : "Add"} Motorcycle</button>
            </form>
        </div>
    );
}

export default MotorcycleForm;
