import React from 'react';

const InitialData = ({ players }) => {
    return (
        <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Step 1: Initial Player Data</h3>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-3 py-2">Player</th>
                            <th className="border border-gray-300 px-3 py-2">Fee (€M)</th>
                            <th className="border border-gray-300 px-3 py-2">Wage (€K/wk)</th>
                            <th className="border border-gray-300 px-3 py-2">Ability</th>
                            <th className="border border-gray-300 px-3 py-2">Potential</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.id}>
                                <td className="border border-gray-300 px-3 py-2 font-medium">{player.name}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.fee}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.wage}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.ability}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.potential}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InitialData;