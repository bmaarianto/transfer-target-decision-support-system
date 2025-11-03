import React, { useState } from 'react';
import { UserPlus, Trophy, TrendingUp, X, Calculator } from 'lucide-react';

const FootballManagerSAW = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Erling Haaland', fee: 350, wage: 397, ability: 185, potential: 195 },
    { id: 2, name: 'Ousmane Dembélé', fee: 350, wage: 209, ability: 172, potential: 174 },
    { id: 3, name: 'Kylian Mbappé', fee: 282, wage: 374, ability: 188, potential: 197 },
    { id: 4, name: 'Vinícius Júnior', fee: 273, wage: 400, ability: 18, potential: 190 },
    { id: 5, name: 'Rodri', fee: 350, wage: 193, ability: 183, potential: 183 }
  ]);

  const [weights, setWeights] = useState({
    fee: 0.25,
    wage: 0.20,
    ability: 0.30,
    potential: 0.25
  });

  const [newPlayer, setNewPlayer] = useState({
    name: '',
    fee: '',
    wage: '',
    ability: '',
    potential: ''
  });

  const [showForm, setShowForm] = useState(false);
  const [showCalculation, setShowCalculation] = useState(false);

  // Normalisasi matriks keputusan
  const normalizeMatrix = () => {
    const maxFee = Math.max(...players.map(p => p.fee));
    const minFee = Math.min(...players.map(p => p.fee));
    const maxWage = Math.max(...players.map(p => p.wage));
    const minWage = Math.min(...players.map(p => p.wage));
    const maxAbility = Math.max(...players.map(p => p.ability));
    const maxPotential = Math.max(...players.map(p => p.potential));

    return players.map(player => ({
      ...player,
      normFee: minFee / player.fee, // Cost (lebih rendah lebih baik)
      normWage: minWage / player.wage, // Cost (lebih rendah lebih baik)
      normAbility: player.ability / maxAbility, // Benefit (lebih tinggi lebih baik)
      normPotential: player.potential / maxPotential // Benefit (lebih tinggi lebih baik)
    }));
  };

  // Hitung nilai preferensi (SAW Score)
  const calculateScores = () => {
    const normalized = normalizeMatrix();
    
    return normalized.map(player => ({
      ...player,
      score: (
        player.normFee * weights.fee +
        player.normWage * weights.wage +
        player.normAbility * weights.ability +
        player.normPotential * weights.potential
      )
    })).sort((a, b) => b.score - a.score);
  };

  const rankedPlayers = calculateScores();
  const normalizedData = normalizeMatrix();
  
  // Data untuk proses perhitungan
  const maxAbility = Math.max(...players.map(p => p.ability));
  const maxPotential = Math.max(...players.map(p => p.potential));
  const minFee = Math.min(...players.map(p => p.fee));
  const minWage = Math.min(...players.map(p => p.wage));

  const handleAddPlayer = () => {
    if (newPlayer.name && newPlayer.fee && newPlayer.wage && newPlayer.ability && newPlayer.potential) {
      setPlayers([...players, {
        id: players.length + 1,
        name: newPlayer.name,
        fee: parseFloat(newPlayer.fee),
        wage: parseFloat(newPlayer.wage),
        ability: parseInt(newPlayer.ability),
        potential: parseInt(newPlayer.potential)
      }]);
      setNewPlayer({ name: '', fee: '', wage: '', ability: '', potential: '' });
      setShowForm(false);
    }
  };

  const handleDeletePlayer = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-900 via-green-800 to-emerald-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-6">
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

          {/* Form Tambah Pemain */}
          {showForm && (
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h3 className="font-bold text-lg mb-3">Add New Player</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <input
                  type="text"
                  placeholder="Player Name"
                  value={newPlayer.name}
                  onChange={(e) => setNewPlayer({...newPlayer, name: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Fee (€M)"
                  value={newPlayer.fee}
                  onChange={(e) => setNewPlayer({...newPlayer, fee: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Wage (€K/week)"
                  value={newPlayer.wage}
                  onChange={(e) => setNewPlayer({...newPlayer, wage: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Ability (0-200)"
                  value={newPlayer.ability}
                  onChange={(e) => setNewPlayer({...newPlayer, ability: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Potential (0-200)"
                  value={newPlayer.potential}
                  onChange={(e) => setNewPlayer({...newPlayer, potential: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleAddPlayer}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Save Player
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Bobot Kriteria */}
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
                  onChange={(e) => setWeights({...weights, fee: parseFloat(e.target.value) || 0})}
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
                  onChange={(e) => setWeights({...weights, wage: parseFloat(e.target.value) || 0})}
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
                  onChange={(e) => setWeights({...weights, ability: parseFloat(e.target.value) || 0})}
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
                  onChange={(e) => setWeights({...weights, potential: parseFloat(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className={`mt-2 text-sm ${totalWeight === 1 ? 'text-green-600' : 'text-red-600'}`}>
              Total Weight: {totalWeight.toFixed(2)} {totalWeight !== 1 && '(should be 1.00)'}
            </div>
          </div>
        </div>

        {/* Proses Perhitungan SAW */}
        {showCalculation && (
          <div className="bg-white rounded-xl shadow-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-blue-600" />
              SAW Calculation Process
            </h2>

            {/* Step 1: Data Awal */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Step 1: Initial Player Data</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2">Player</th>
                      <th className="border border-gray-300 px-3 py-2">Fee (€M)</th>
                      <th className="border border-gray-300 px-3 py-2">Wage (€K/wk)</th>
                      <th className="border border-gray-300 px-3 py-2">Ability</th>
                      <th className="border border-gray-300 px-3 py-2">Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map(player => (
                      <tr key={player.id}>
                        <td className="border border-gray-300 px-3 py-2 font-medium">{player.name}</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">{player.fee}</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">{player.wage}</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">{player.ability}</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">{player.potential}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 2: Nilai Min/Max */}
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

            {/* Step 3: Normalisasi */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Step 3: Normalization</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3 text-sm">
                <p className="font-semibold mb-2">Normalization Formula:</p>
                <p>• <strong>Cost Criteria (Fee, Wage):</strong> Lowest Value ÷ Player's Value</p>
                <p className="text-xs text-gray-600 ml-4">Example Fee: {minFee} ÷ 25 = {(minFee/25).toFixed(4)}</p>
                <p className="mt-2">• <strong>Benefit Criteria (Ability, Potential):</strong> Player's Value ÷ Highest Value</p>
                <p className="text-xs text-gray-600 ml-4">Example Ability: 160 ÷ {maxAbility} = {(160/maxAbility).toFixed(4)}</p>
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

            {/* Step 4: Perhitungan Skor */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Step 4: Calculate Final Score for Each Player</h3>
              <div className="bg-green-50 p-3 rounded-lg mb-3 text-sm">
                <p className="font-semibold mb-2">How to Calculate Score:</p>
                <p>Multiply each normalized value by its weight, then sum all the results</p>
                <p className="mt-2 text-gray-700">Weights used: Fee={weights.fee}, Wage={weights.wage}, Ability={weights.ability}, Potential={weights.potential}</p>
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
                              <div className="font-semibold text-green-700 pt-1 border-t">Total: {feeCalc} + {wageCalc} + {abilityCalc} + {potentialCalc}</div>
                            </div>
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-center font-bold text-green-700">{player.score.toFixed(4)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Ranking Hasil */}
        <div className="bg-white rounded-xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Transfer Target Ranking
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Player Name</th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Fee (€M)</th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Wage (€K/wk)</th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Ability</th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Potential</th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">SAW Score</th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {rankedPlayers.map((player, index) => (
                  <tr 
                    key={player.id}
                    className={`border-b hover:bg-gray-50 transition ${
                      index === 0 ? 'bg-yellow-50' : index === 1 ? 'bg-gray-50' : index === 2 ? 'bg-orange-50' : ''
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                        index === 0 ? 'bg-yellow-400 text-white' : 
                        index === 1 ? 'bg-gray-400 text-white' : 
                        index === 2 ? 'bg-orange-400 text-white' : 
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{player.name}</td>
                    <td className="px-4 py-3 text-center">€{player.fee}M</td>
                    <td className="px-4 py-3 text-center">€{player.wage}K</td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                        {player.ability}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-medium">
                        {player.potential}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg font-bold">
                        {player.score.toFixed(4)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDeletePlayer(player.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rekomendasi */}
          {rankedPlayers.length > 0 && (
            <div className="mt-6 bg-linear-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-lg text-green-800 mb-2">🎯 Recommendation</h3>
              <p className="text-gray-800">
                Based on SAW analysis, <span className="font-bold text-green-700">{rankedPlayers[0].name}</span> is the best transfer target 
                with a score of <span className="font-bold">{rankedPlayers[0].score.toFixed(4)}</span>. 
                This player offers the optimal balance between cost (fee & wage) and quality (ability & potential).
              </p>
            </div>
          )}
        </div>

        {/* Penjelasan Metode */}
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
      </div>
    </div>
  );
};

export default FootballManagerSAW;