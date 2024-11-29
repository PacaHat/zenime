import axios from "axios";

export default async function getQtip(id) {
  try {
    const api_url = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${api_url}/qtip/${id.split("-").pop()}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching qtip info:", error);
    return error;
  }
}
