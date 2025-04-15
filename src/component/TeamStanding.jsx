import React, { useEffect, useState } from 'react';
import getPointsTable from './../Services/API';
import Loader from './../UI/Loader';

export default function TeamStanding() {
  const [pointTable, setPointTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointTable = async () => {
      try {
        const data = await getPointsTable();
        setPointTable(data);
      } catch (error) {
        setError("We are unable to load the data.");
      } finally {
        setLoading(false);
      }
    };
    fetchPointTable();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-6 text-center">Points Table</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-400">
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 text-white">Team</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 text-white">Played</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 text-white">Win</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 text-white">Lost</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 text-white">Points</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 text-white">NRR</th>
            </tr>
          </thead>
          <tbody>
            {pointTable.map((team, index) => (
              <tr key={index} className="text-center border-t">
                <td className="px-4 py-2">{team.team}</td>
                <td className="px-4 py-2">{team.played}</td>
                <td className="px-4 py-2">{team.won}</td>
                <td className="px-4 py-2">{team.lost}</td>
                <td className="px-4 py-2">{team.points}</td>
                <td className="px-4 py-2">{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
