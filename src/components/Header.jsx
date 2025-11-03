import React from 'react';
import { Trophy, Calculator, UserPlus } from 'lucide-react';

const Header = ({ showCalculation, setShowCalculation, showForm, setShowForm }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Football Manager</h1>
                    <p className="text-sm sm:text-base text-gray-600">Transfer Target Decision Support System - SAW Method</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                    onClick={() => setShowCalculation(!showCalculation)}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base w-full sm:w-auto"
                >
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="sm:inline">{showCalculation ? 'Hide' : 'Show'} Calculation</span>
                </button>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base w-full sm:w-auto"
                >
                    <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="sm:inline">Add Player</span>
                </button>
            </div>
        </div>
    );
};

export default Header;