import React from 'react';

const AddPlayerForm = ({ showForm, newPlayer, setNewPlayer, handleAddPlayer, setShowForm }) => {
    return (
        showForm && (
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h3 className="font-bold text-lg mb-3">Add New Player</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <input
                        type="text"
                        placeholder="Player Name"
                        value={newPlayer.name}
                        onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                    <input
                        type="number"
                        placeholder="Fee (€M)"
                        value={newPlayer.fee}
                        onChange={(e) => setNewPlayer({ ...newPlayer, fee: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                    <input
                        type="number"
                        placeholder="Wage (€K/week)"
                        value={newPlayer.wage}
                        onChange={(e) => setNewPlayer({ ...newPlayer, wage: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                    <input
                        type="number"
                        placeholder="Ability (0-200)"
                        value={newPlayer.ability}
                        onChange={(e) => setNewPlayer({ ...newPlayer, ability: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                    <input
                        type="number"
                        placeholder="Potential (0-200)"
                        value={newPlayer.potential}
                        onChange={(e) => setNewPlayer({ ...newPlayer, potential: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                </div>
                <div className="flex gap-2 mt-3">
                    <button
                        onClick={handleAddPlayer}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                    >
                        Save Player
                    </button>
                    <button
                        onClick={() => setShowForm(false)}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )
    );
};

export default AddPlayerForm;