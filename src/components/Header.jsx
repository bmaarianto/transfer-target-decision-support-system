import React from 'react';
import { Trophy, Calculator, UserPlus } from 'lucide-react';

const Header = ({ showCalculation, setShowCalculation, showForm, setShowForm }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <Trophy className="w-10 h-10 text-yellow-500" />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Football Manager</h1>
                    <p className="text-gray-600">Transfer Target Decision Support System - SAW Method</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => setShowCalculation(!showCalculation)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                    <Calculator className="w-5 h-5" />
                    {showCalculation ? 'Hide' : 'Show'} Calculation
                </button>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                    <UserPlus className="w-5 h-5" />
                    Add Player
                </button>
            </div>
        </div>
    );
};

export default Header;