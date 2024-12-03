import React, { useState } from 'react';
import { updateUser } from '../services/api';

const EditUserModal = ({ user, closeModal, fetchUsers }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = { id: user.id, name, email };
            await updateUser(updatedUser);
            alert('User updated successfully!');
            fetchUsers(); 
            closeModal();
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Error updating user');
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    width: '400px',
                }}
            >
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit" style={{ marginTop: '10px' }}>
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={closeModal}
                        style={{ marginTop: '10px', marginLeft: '10px' }}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;