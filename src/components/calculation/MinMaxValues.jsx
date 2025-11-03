import React from 'react';

const MinMaxValues = ({ minFee, minWage, maxAbility, maxPotential }) => {
    return (
        <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Step 2: Find Minimum & Maximum Values</h3>
            <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <p className="text-gray-600">Lowest Fee (Cost):</p>
                        <p className="font-bold text-lg">€{minFee}M</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Lowest Wage (Cost):</p>
                        <p className="font-bold text-lg">€{minWage}K</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Highest Ability (Benefit):</p>
                        <p className="font-bold text-lg">{maxAbility}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Highest Potential (Benefit):</p>
                        <p className="font-bold text-lg">{maxPotential}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinMaxValues;