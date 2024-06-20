import React from 'react';

function MotorcycleRow({ motorcycle, onDelete }) {
    return (
        <tr>
            <td>{motorcycle.id}</td>
            <td>{motorcycle.make}</td>
            <td>{motorcycle.model}</td>
            <td>{motorcycle.year}</td>
            <td>
                <button onClick={onDelete} className="delete-btn">Delete</button>
            </td>
        </tr>
    );
}

export default MotorcycleRow;
