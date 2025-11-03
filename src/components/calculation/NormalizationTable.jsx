import React from 'react';

const NormalizationTable = ({ normalizedData, minFee, maxAbility }) => {
    return (
        <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Step 3: Normalization</h3>
            <div className="bg-blue-50 p-3 rounded-lg mb-3 text-sm">
                <p className="font-semibold mb-2">Normalization Formula:</p>
                <p>• <strong>Cost Criteria (Fee, Wage):</strong> Lowest Value ÷ Player's Value</p>
                <p className="text-xs text-gray-600 ml-4">Example Fee: {minFee} ÷ 25 = {(minFee / 25).toFixed(4)}</p>
                <p className="mt-2">• <strong>Benefit Criteria (Ability, Potential):</strong> Player's Value ÷ Highest Value</p>
                <p className="text-xs text-gray-600 ml-4">Example Ability: 160 ÷ {maxAbility} = {(160 / maxAbility).toFixed(4)}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-3 py-2">Player</th>
                            <th className="border border-gray-300 px-3 py-2">Norm Fee</th>
                            <th className="border border-gray-300 px-3 py-2">Norm Wage</th>
                            <th className="border border-gray-300 px-3 py-2">Norm Ability</th>
                            <th className="border border-gray-300 px-3 py-2">Norm Potential</th>
                        </tr>
                    </thead>
                    <tbody>
                        {normalizedData.map(player => (
                            <tr key={player.id}>
                                <td className="border border-gray-300 px-3 py-2 font-medium">{player.name}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.normFee.toFixed(4)}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.normWage.toFixed(4)}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.normAbility.toFixed(4)}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{player.normPotential.toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NormalizationTable;