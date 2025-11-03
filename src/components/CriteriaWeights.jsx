import React from 'react';

const CriteriaWeights = ({ weights, setWeights, totalWeight }) => {
    return (
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mt-4">
            <h3 className="font-bold text-lg mb-3 text-center sm:text-left">Criteria Weights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                        <span className="inline-block w-full">Transfer Fee</span>
                        <span className="text-xs text-blue-600">(Cost Criteria)</span>
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.fee}
                        onChange={(e) => setWeights({ ...weights, fee: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                    />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                        <span className="inline-block w-full">Weekly Wage</span>
                        <span className="text-xs text-blue-600">(Cost Criteria)</span>
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.wage}
                        onChange={(e) => setWeights({ ...weights, wage: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                    />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                        <span className="inline-block w-full">Current Ability</span>
                        <span className="text-xs text-green-600">(Benefit Criteria)</span>
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.ability}
                        onChange={(e) => setWeights({ ...weights, ability: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                    />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                        <span className="inline-block w-full">Potential</span>
                        <span className="text-xs text-green-600">(Benefit Criteria)</span>
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={weights.potential}
                        onChange={(e) => setWeights({ ...weights, potential: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                    />
                </div>
            </div>
            <div className={`mt-4 text-sm sm:text-base text-center sm:text-left ${totalWeight === 1 ? 'text-green-600' : 'text-red-600'}`}>
                <div className="font-medium">Total Weight: {totalWeight.toFixed(2)}</div>
                {totalWeight !== 1 && <div className="text-xs mt-1">(The sum of all weights should be 1.00)</div>}
            </div>
        </div>
    );
};

export default CriteriaWeights;