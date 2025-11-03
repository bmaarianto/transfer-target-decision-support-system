import React from 'react';
import { Calculator } from 'lucide-react';
import InitialData from './calculation/InitialData';
import MinMaxValues from './calculation/MinMaxValues';
import NormalizationTable from './calculation/NormalizationTable';
import ScoreCalculation from './calculation/ScoreCalculation';

const CalculationProcess = ({ showCalculation, players, weights, normalizedData, rankedPlayers, minFee, minWage, maxAbility, maxPotential }) => {
    if (!showCalculation) return null;

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                SAW Calculation Process
            </h2>

            <InitialData players={players} />

            <MinMaxValues
                minFee={minFee}
                minWage={minWage}
                maxAbility={maxAbility}
                maxPotential={maxPotential}
            />

            <NormalizationTable
                normalizedData={normalizedData}
                minFee={minFee}
                maxAbility={maxAbility}
            />

            <ScoreCalculation
                rankedPlayers={rankedPlayers}
                weights={weights}
            />
        </div>
    );
};

export default CalculationProcess;