import React, { useRef, useEffect } from 'react';
import './css/MotorcycleForm.css';

function MotorcycleForm({ onAddMotorcycle, onUpdateMotorcycle, motorcycleToEdit }) {
    const makeRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();
    const userIdRef = useRef();

    useEffect(() => {
        if (motorcycleToEdit) {
            makeRef.current.value = motorcycleToEdit.Make || '';
            modelRef.current.value = motorcycleToEdit.Model || '';
            yearRef.current.value = motorcycleToEdit.Year || '';
            colorRef.current.value = motorcycleToEdit.Color || '';
            userIdRef.current.value = motorcycleToEdit.UserId || '';
        } else {
            makeRef.current.value = '';
            modelRef.current.value = '';
            yearRef.current.value = '';
            colorRef.current.value = '';
            userIdRef.current.value = '';
        }
    }, [motorcycleToEdit]);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const make = makeRef.current.value.trim();
        const model = modelRef.current.value.trim();
        const year = yearRef.current.value.trim();
        const color = colorRef.current.value.trim();
        const userId = userIdRef.current.value.trim();
    
        if (!make || !model || !year || !userId) {
            alert('Please fill out all fields!');
            return;
        }
    
        const motorcycle = { 
            Id: motorcycleToEdit ? motorcycleToEdit.Id : 0,
            Make: make, 
            Model: model, 
            Year: parseInt(year), 
            Color: color,
            UserId: parseInt(userId),
            CreatedByUserId: 1, 
            UpdatedByUserId: 1  
        };
    
        if (motorcycleToEdit) {
            onUpdateMotorcycle({
                ...motorcycle,
                id: motorcycleToEdit.Id  
            });
        } else {
            onAddMotorcycle(motorcycle);
        }
    
        makeRef.current.value = '';
        modelRef.current.value = '';
        yearRef.current.value = '';
        colorRef.current.value = '';
        userIdRef.current.value = '';
    };    

    return (
        <div className="motorcycle-form">
            <form onSubmit={handleSubmit}>
                <input type="text" ref={makeRef} placeholder="Make" required />
                <input type="text" ref={modelRef} placeholder="Model" required />
                <input type="number" ref={yearRef} placeholder="Year" required />
                <input type="text" ref={colorRef} placeholder="Color" />
                <input type="number" ref={userIdRef} placeholder="User ID" required />
                <button type="submit">{motorcycleToEdit ? "Update" : "Add"} Motorcycle</button>
            </form>
        </div>
    );
}

export default MotorcycleForm;
