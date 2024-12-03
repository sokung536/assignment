import React, { useState } from 'react';
import { deleteUser } from '../services/api';
import EditUserModal from './editUserModal';

const UserList = ({ users, fetchUsers }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        console.log('Deleting user with ID:', id); // Debug ID
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(id);
                alert('User deleted successfully!');
                fetchUsers(); 
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Error deleting user');
            }
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button
                            onClick={() => handleEdit(user)}
                            style={{
                                marginLeft: '10px',
                                cursor: 'pointer',
                                background: 'transparent',
                                border: 'none',
                                color: 'blue',
                                fontSize: '16px',
                            }}
                        >
                            ✏️
                        </button>
                        <button
                            onClick={() => handleDelete(user.id)}
                            style={{
                                marginLeft: '10px',
                                cursor: 'pointer',
                                background: 'transparent',
                                border: 'none',
                                color: 'red',
                                fontSize: '16px',
                            }}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
            {isModalOpen && (
                <EditUserModal
                    user={selectedUser}
                    closeModal={closeModal}
                    fetchUsers={fetchUsers}
                />
            )}
        </div>
    );
};

export default UserList;