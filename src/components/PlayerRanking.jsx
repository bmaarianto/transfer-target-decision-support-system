import React from 'react';
import { TrendingUp, X } from 'lucide-react';

const PlayerRanking = ({ rankedPlayers, handleDeletePlayer }) => {
    return (
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl p-3 sm:p-4 md:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center sm:justify-start gap-2">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                Transfer Target Ranking
            </h2>

            <div className="overflow-x-auto -mx-3 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th scope="col" className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Rank</th>
                                    <th scope="col" className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Player Name</th>
                                    <th scope="col" className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-700">Fee</th>
                                    <th scope="col" className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-700">Wage</th>
                                    <th scope="col" className="hidden sm:table-cell py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-700">Ability</th>
                                    <th scope="col" className="hidden sm:table-cell py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-700">Potential</th>
                                    <th scope="col" className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-700">Score</th>
                                    <th scope="col" className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {rankedPlayers.map((player, index) => (
                                    <tr
                                        key={player.id}
                                        className={`hover:bg-gray-50 transition ${index === 0 ? 'bg-yellow-50' :
                                                index === 1 ? 'bg-gray-50' :
                                                    index === 2 ? 'bg-orange-50' : ''
                                            }`}
                                    >
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">
                                            <div className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-bold text-xs sm:text-sm ${index === 0 ? 'bg-yellow-400 text-white' :
                                                    index === 1 ? 'bg-gray-400 text-white' :
                                                        index === 2 ? 'bg-orange-400 text-white' :
                                                            'bg-gray-200 text-gray-700'
                                                }`}>
                                                {index + 1}
                                            </div>
                                        </td>
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-800">{player.name}</td>
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm">€{player.fee}M</td>
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm">€{player.wage}K</td>
                                        <td className="hidden sm:table-cell py-2 sm:py-3 px-2 sm:px-4 text-center">
                                            <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 py-1 rounded font-medium">
                                                {player.ability}
                                            </span>
                                        </td>
                                        <td className="hidden sm:table-cell py-2 sm:py-3 px-2 sm:px-4 text-center">
                                            <span className="bg-purple-100 text-purple-800 text-xs sm:text-sm px-2 py-1 rounded font-medium">
                                                {player.potential}
                                            </span>
                                        </td>
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                                            <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg font-bold">
                                                {player.score.toFixed(4)}
                                            </span>
                                        </td>
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                                            <button
                                                onClick={() => handleDeletePlayer(player.id)}
                                                className="text-red-500 hover:text-red-700 transition"
                                                aria-label="Delete player"
                                            >
                                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Mobile View: Player Stats */}
            <div className="sm:hidden mt-4 space-y-2">
                {rankedPlayers.map((player, index) => (
                    <div key={`mobile-${player.id}`} className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className={`flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs ${index === 0 ? 'bg-yellow-400 text-white' :
                                        index === 1 ? 'bg-gray-400 text-white' :
                                            index === 2 ? 'bg-orange-400 text-white' :
                                                'bg-gray-200 text-gray-700'
                                    }`}>
                                    {index + 1}
                                </div>
                                <span className="font-semibold text-sm">{player.name}</span>
                            </div>
                            <button
                                onClick={() => handleDeletePlayer(player.id)}
                                className="text-red-500 hover:text-red-700 transition"
                                aria-label="Delete player"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="p-2 bg-white rounded border border-gray-100">
                                <div className="text-gray-600">Ability</div>
                                <div className="font-semibold text-blue-800">{player.ability}</div>
                            </div>
                            <div className="p-2 bg-white rounded border border-gray-100">
                                <div className="text-gray-600">Potential</div>
                                <div className="font-semibold text-purple-800">{player.potential}</div>
                            </div>
                            <div className="p-2 bg-white rounded border border-gray-100">
                                <div className="text-gray-600">Fee</div>
                                <div className="font-semibold">€{player.fee}M</div>
                            </div>
                            <div className="p-2 bg-white rounded border border-gray-100">
                                <div className="text-gray-600">Wage</div>
                                <div className="font-semibold">€{player.wage}K</div>
                            </div>
                        </div>
                        <div className="mt-2 p-2 bg-green-50 rounded text-center">
                            <div className="text-xs text-gray-600">SAW Score</div>
                            <div className="font-bold text-green-800">{player.score.toFixed(4)}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Rekomendasi */}
            {rankedPlayers.length > 0 && (
                <div className="mt-6 bg-linear-to-r from-green-100 to-emerald-100 p-3 sm:p-4 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-base sm:text-lg text-green-800 mb-2">🎯 Recommendation</h3>
                    <div className="text-sm sm:text-base text-gray-800 space-y-2">
                        <p>
                            Based on SAW analysis, <span className="font-bold text-green-700">{rankedPlayers[0].name}</span> is the best transfer target
                            with a score of <span className="font-bold">{rankedPlayers[0].score.toFixed(4)}</span>.
                        </p>
                        <p className="text-sm text-gray-600">
                            This player offers the optimal balance between cost (fee & wage) and quality (ability & potential).
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayerRanking;