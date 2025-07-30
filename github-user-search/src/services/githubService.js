import axios from "axios";

// Function to fetch GitHub user data
export const fetchUserData = async (userName) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
