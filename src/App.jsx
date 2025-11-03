import React, { useState } from 'react';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import CriteriaWeights from './components/CriteriaWeights';
import CalculationProcess from './components/CalculationProcess';
import PlayerRanking from './components/PlayerRanking';
import MethodExplanation from './components/MethodExplanation';
import { Calculator, TrendingUp, Trophy, UserPlus, X } from 'lucide-react';

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
    <div className="min-h-screen bg-linear-to-br from-green-900 via-green-800 to-emerald-900 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl p-3 sm:p-4 md:p-6">
          <Header
            showCalculation={showCalculation}
            setShowCalculation={setShowCalculation}
            showForm={showForm}
            setShowForm={setShowForm}
          />

          <AddPlayerForm
            showForm={showForm}
            newPlayer={newPlayer}
            setNewPlayer={setNewPlayer}
            handleAddPlayer={handleAddPlayer}
            setShowForm={setShowForm}
          />

          <CriteriaWeights
            weights={weights}
            setWeights={setWeights}
            totalWeight={totalWeight}
          />
        </div>

        <CalculationProcess
          showCalculation={showCalculation}
          players={players}
          weights={weights}
          normalizedData={normalizedData}
          rankedPlayers={rankedPlayers}
          minFee={minFee}
          minWage={minWage}
          maxAbility={maxAbility}
          maxPotential={maxPotential}
        />

        <PlayerRanking
          rankedPlayers={rankedPlayers}
          handleDeletePlayer={handleDeletePlayer}
        />

        <MethodExplanation />
      </div>
    </div>
  );
};

export default FootballManagerSAW;