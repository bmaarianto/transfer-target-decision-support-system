import React from 'react';

const AddPlayerForm = ({ showForm, newPlayer, setNewPlayer, handleAddPlayer, setShowForm }) => {
    return (
        showForm && (
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mt-4">
                <h3 className="font-bold text-lg mb-3 text-center sm:text-left">Add New Player</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Player Name</label>
                        <input
                            type="text"
                            placeholder="Player Name"
                            value={newPlayer.name}
                            onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Transfer Fee</label>
                        <input
                            type="number"
                            placeholder="Fee (€M)"
                            value={newPlayer.fee}
                            onChange={(e) => setNewPlayer({ ...newPlayer, fee: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Weekly Wage</label>
                        <input
                            type="number"
                            placeholder="Wage (€K/week)"
                            value={newPlayer.wage}
                            onChange={(e) => setNewPlayer({ ...newPlayer, wage: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Current Ability</label>
                        <input
                            type="number"
                            placeholder="Ability (0-200)"
                            value={newPlayer.ability}
                            onChange={(e) => setNewPlayer({ ...newPlayer, ability: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Potential Ability</label>
                        <input
                            type="number"
                            placeholder="Potential (0-200)"
                            value={newPlayer.potential}
                            onChange={(e) => setNewPlayer({ ...newPlayer, potential: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <button
                        onClick={handleAddPlayer}
                        className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition text-sm sm:text-base"
                    >
                        Save Player
                    </button>
                    <button
                        onClick={() => setShowForm(false)}
                        className="w-full sm:w-auto bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition text-sm sm:text-base"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )
    );
};

export default AddPlayerForm;