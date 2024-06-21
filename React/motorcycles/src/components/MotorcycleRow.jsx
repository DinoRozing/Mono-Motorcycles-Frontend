import React, { Component } from 'react';

class MotorcycleRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false
        };
    }

    handleDelete = () => {
        this.setState({ isDeleted: true });
        this.props.onDelete();
    }

    handleUpdate = () => {
        this.props.onUpdate(this.props.motorcycle);
    }

    render() {
        const { motorcycle } = this.props;
        const { isDeleted } = this.state;

        if (isDeleted) {
            return null;
        }

        return (
            <tr>
                <td>{motorcycle.id}</td>
                <td>{motorcycle.make}</td>
                <td>{motorcycle.model}</td>
                <td>{motorcycle.year}</td>
                <td>
                    <button onClick={this.handleDelete} className="delete-btn">Delete</button>
                    <button onClick={this.handleUpdate} className="update-btn">Update</button>
                </td>
            </tr>
        );
    }
}

export default MotorcycleRow;
