import React from 'react';
import './css/MotorcycleTable.css';
import MotorcycleRow from './MotorcycleRow';

function MotorcycleTable({ motorcycles, onDeleteMotorcycle, onEditMotorcycle }) {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {motorcycles.map(motorcycle => (
                        <MotorcycleRow 
                            key={motorcycle.id} 
                            motorcycle={motorcycle} 
                            onDelete={() => onDeleteMotorcycle(motorcycle.id)}  // Provjeri da li je ovdje ispravno proslijeđen id
                            onUpdate={() => onEditMotorcycle(motorcycle)}       // I ovdje
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MotorcycleTable;
