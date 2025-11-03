import React from 'react';
import { TrendingUp, X } from 'lucide-react';

const PlayerRanking = ({ rankedPlayers, handleDeletePlayer }) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Transfer Target Ranking
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-300">
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Rank</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Player Name</th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Fee (€M)</th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Wage (€K/wk)</th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Ability</th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Potential</th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">SAW Score</th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankedPlayers.map((player, index) => (
                            <tr
                                key={player.id}
                                className={`border-b hover:bg-gray-50 transition ${index === 0 ? 'bg-yellow-50' : index === 1 ? 'bg-gray-50' : index === 2 ? 'bg-orange-50' : ''
                                    }`}
                            >
                                <td className="px-4 py-3">
                                    <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${index === 0 ? 'bg-yellow-400 text-white' :
                                            index === 1 ? 'bg-gray-400 text-white' :
                                                index === 2 ? 'bg-orange-400 text-white' :
                                                    'bg-gray-200 text-gray-700'
                                        }`}>
                                        {index + 1}
                                    </div>
                                </td>
                                <td className="px-4 py-3 font-semibold text-gray-800">{player.name}</td>
                                <td className="px-4 py-3 text-center">€{player.fee}M</td>
                                <td className="px-4 py-3 text-center">€{player.wage}K</td>
                                <td className="px-4 py-3 text-center">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                                        {player.ability}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-medium">
                                        {player.potential}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg font-bold">
                                        {player.score.toFixed(4)}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <button
                                        onClick={() => handleDeletePlayer(player.id)}
                                        className="text-red-500 hover:text-red-700 transition"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Rekomendasi */}
            {rankedPlayers.length > 0 && (
                <div className="mt-6 bg-linear-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-lg text-green-800 mb-2">🎯 Recommendation</h3>
                    <p className="text-gray-800">
                        Based on SAW analysis, <span className="font-bold text-green-700">{rankedPlayers[0].name}</span> is the best transfer target
                        with a score of <span className="font-bold">{rankedPlayers[0].score.toFixed(4)}</span>.
                        This player offers the optimal balance between cost (fee & wage) and quality (ability & potential).
                    </p>
                </div>
            )}
        </div>
    );
};

export default PlayerRanking;