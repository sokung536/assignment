import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserForm = ({ fetchUsers }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, password };
        try {
            await createUser(newUser);
            alert('User created successfully!');
            setName('');
            setEmail('');
            setPassword('');
            fetchUsers(); 
        } catch (err) {
            console.error(err);
            alert('Error creating user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create User</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;