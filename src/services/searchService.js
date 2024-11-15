import axios from "axios";

const API_KEY = "a853354b";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovieByTitle = async (title) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        t: title,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data by title:", error);
    throw error;
  }
};

export const searchMovieById = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data by ID:", error);
    throw error;
  }
};
