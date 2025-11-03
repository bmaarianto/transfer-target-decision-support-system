import React from 'react';

const ScoreCalculation = ({ rankedPlayers, weights }) => {
    return (
        <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Step 4: Calculate Final Score for Each Player</h3>
            <div className="bg-green-50 p-3 rounded-lg mb-3 text-sm">
                <p className="font-semibold mb-2">How to Calculate Score:</p>
                <p>Multiply each normalized value by its weight, then sum all the results</p>
                <p className="mt-2 text-gray-700">
                    Weights used: Fee={weights.fee}, Wage={weights.wage}, Ability={weights.ability}, Potential={weights.potential}
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-3 py-2">Player</th>
                            <th className="border border-gray-300 px-3 py-2">Detailed Calculation</th>
                            <th className="border border-gray-300 px-3 py-2">Final Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankedPlayers.map(player => {
                            const feeCalc = (player.normFee * weights.fee).toFixed(4);
                            const wageCalc = (player.normWage * weights.wage).toFixed(4);
                            const abilityCalc = (player.normAbility * weights.ability).toFixed(4);
                            const potentialCalc = (player.normPotential * weights.potential).toFixed(4);

                            return (
                                <tr key={player.id}>
                                    <td className="border border-gray-300 px-3 py-2 font-medium">{player.name}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-xs">
                                        <div className="space-y-1">
                                            <div>Fee: {player.normFee.toFixed(4)} × {weights.fee} = {feeCalc}</div>
                                            <div>Wage: {player.normWage.toFixed(4)} × {weights.wage} = {wageCalc}</div>
                                            <div>Ability: {player.normAbility.toFixed(4)} × {weights.ability} = {abilityCalc}</div>
                                            <div>Potential: {player.normPotential.toFixed(4)} × {weights.potential} = {potentialCalc}</div>
                                            <div className="font-semibold text-green-700 pt-1 border-t">
                                                Total: {feeCalc} + {wageCalc} + {abilityCalc} + {potentialCalc}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-gray-300 px-3 py-2 text-center font-bold text-green-700">
                                        {player.score.toFixed(4)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScoreCalculation;