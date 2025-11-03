import React from 'react';

const MethodExplanation = () => {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 mt-6">
            <h3 className="font-bold text-lg mb-3">About SAW (Simple Additive Weighting) Method</h3>
            <div className="text-sm text-gray-700 space-y-2">
                <p>SAW method calculates the preference value based on weighted criteria normalization:</p>
                <ul className="list-disc ml-5 space-y-1">
                    <li><strong>Cost Criteria</strong> (Fee, Wage): Lower is better - normalized using minimum value</li>
                    <li><strong>Benefit Criteria</strong> (Ability, Potential): Higher is better - normalized using maximum value</li>
                    <li><strong>Final Score</strong>: Sum of (normalized value × weight) for all criteria</li>
                </ul>
                <p className="mt-2">The player with the highest score is considered the best option.</p>
            </div>
        </div>
    );
};

export default MethodExplanation;