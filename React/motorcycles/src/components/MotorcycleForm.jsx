import React, { useRef } from 'react';
import './css/MotorcycleForm.css';

function MotorcycleForm({ onAddMotorcycle }) {
    const makeRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const make = makeRef.current.value.trim();
        const model = modelRef.current.value.trim();
        const year = yearRef.current.value.trim();

        if (!make || !model || !year) {
            alert('Please fill out all fields!');
            return;
        }

        const newMotorcycle = { 
            make, 
            model, 
            year 
        };

        onAddMotorcycle(newMotorcycle);

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
                <button type="submit">Add Motorcycle</button>
            </form>
        </div>
    );
}

export default MotorcycleForm;
