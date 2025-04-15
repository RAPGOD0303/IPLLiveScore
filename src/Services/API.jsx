import axios from 'axios';

const API_URL = "https://cricket-live-line1.p.rapidapi.com/";

const HEADERS = {
  'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com',
  'x-rapidapi-key': 'b33a16341amsh336cac30571f7bap1a8173jsn26af3fdf98b3'
};

const getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}series/336/pointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);

    return response.data.data.A.map(team => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      lost: team.L,
      points: team.Pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("There is an error fetching the data:", error);
    throw error;
  }
};

export default getPointsTable;
