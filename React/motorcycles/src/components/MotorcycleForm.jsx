import React, { useRef, useEffect } from 'react';
import './css/MotorcycleForm.css';
import { updateMotorcycle } from '../hooks/motorcycles';

function MotorcycleForm({ onAddMotorcycle, onUpdateMotorcycle, motorcycleToEdit }) {
    const makeRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const userIdRef = useRef();

    useEffect(() => {
        if (motorcycleToEdit) {
            makeRef.current.value = motorcycleToEdit.make || '';
            modelRef.current.value = motorcycleToEdit.model || '';
            yearRef.current.value = motorcycleToEdit.year || '';
            userIdRef.current.value = motorcycleToEdit.userId || '';
        } else {
            makeRef.current.value = '';
            modelRef.current.value = '';
            yearRef.current.value = '';
            userIdRef.current.value = '';
        }
    }, [motorcycleToEdit]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const make = makeRef.current.value.trim();
        const model = modelRef.current.value.trim();
        const year = yearRef.current.value.trim();
        const userId = userIdRef.current.value.trim();

        if (!make || !model || !year || !userId) {
            alert('Please fill out all fields!');
            return;
        }

        const motorcycle = { 
            id: motorcycleToEdit ? motorcycleToEdit.id : 0,
            make: make, 
            model: model, 
            year: parseInt(year), 
            userId: parseInt(userId),
            createdByUserId: 1, 
            updatedByUserId: 1  
        };

        try {
            if (motorcycleToEdit) {
                await updateMotorcycle(motorcycle);
                onUpdateMotorcycle(motorcycle);
            } else {
                onAddMotorcycle(motorcycle);
            }
        } catch (error) {
            console.error('Failed to submit motorcycle:', error);
        }

        makeRef.current.value = '';
        modelRef.current.value = '';
        yearRef.current.value = '';
        userIdRef.current.value = '';
    };

    return (
        <div className="motorcycle-form">
            <form onSubmit={handleSubmit}>
                <input type="text" ref={makeRef} placeholder="Make" required />
                <input type="text" ref={modelRef} placeholder="Model" required />
                <input type="number" ref={yearRef} placeholder="Year" required />
                <input type="number" ref={userIdRef} placeholder="User ID" required />
                <button type="submit">{motorcycleToEdit ? "Update" : "Add"} Motorcycle</button>
            </form>
        </div>
    );
}

export default MotorcycleForm;
