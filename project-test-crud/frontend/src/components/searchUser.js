import React, { useState } from 'react';
import { getUserById } from '../services/api';

const SearchUser = ({ setUsers, fetchUsers }) => {
    const [searchId, setSearchId] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');

        if (!searchId) {
            setError('Please enter a user ID.');
            return;
        }

        try {
            const response = await getUserById(searchId);
            setUsers([response.data]); 
        } catch (err) {
            console.error('Error fetching user:', err);
            setError('User not found or an error occurred.');
        }
    };

    const handleSearchAll = () => {
        setError('');
        fetchUsers();
    };

    return (
        <div className="my-4">
            <h2 className="text-lg font-semibold mb-2">Search User by ID</h2>
            <form onSubmit={handleSearch} className="space-y-2">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        placeholder="Enter user ID"
                        className="p-2 border rounded-md flex-1"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Search
                    </button>
                    <button
                        type="button"
                        onClick={handleSearchAll}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                        Search All
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default SearchUser;