import React from 'react';

const CriteriaWeights = ({ weights, setWeights, totalWeight }) => {
    return (
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 className="font-bold text-lg mb-3">Criteria Weights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Transfer Fee (Cost)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.fee}
                        onChange={(e) => setWeights({ ...weights, fee: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Weekly Wage (Cost)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.wage}
                        onChange={(e) => setWeights({ ...weights, wage: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Current Ability (Benefit)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.ability}
                        onChange={(e) => setWeights({ ...weights, ability: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Potential (Benefit)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.potential}
                        onChange={(e) => setWeights({ ...weights, potential: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
            </div>
            <div className={`mt-2 text-sm ${totalWeight === 1 ? 'text-green-600' : 'text-red-600'}`}>
                Total Weight: {totalWeight.toFixed(2)} {totalWeight !== 1 && '(should be 1.00)'}
            </div>
        </div>
    );
};

export default CriteriaWeights;