const API_ENDPOINT = "http://localhost:3000";
const HOGS_URL = `${API_ENDPOINT}/hogs`;

export const getHogs = () => fetch(HOGS_URL).then(res => res.json());

export default {
  getHogs
};
