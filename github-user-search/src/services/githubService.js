import axios from "axios";

const GITHUB_SEARCH_API_BASE_URL = "https://api.github.com/search/users";
const RESULTS_PER_PAGE = 30;

// Function to fetch GitHub user data
export const searchGithubUsers = async ({
  userName,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let queryParts = [];

    if (userName) {
      queryParts.push(userName);

      if (location) {
        queryParts.push(`location:${location}`);
      }

      if (minRepos && parseInt(minRepos, 10) >= 0) {
        queryParts.push(`repos:>=${parseInt(minRepos, 10)}`);
      }

      if (queryParts.length === 0) {
        throw new Error("Please provide at least a username");
      }
    }

    const query = queryParts.join("");
    const response = await axios.get(GITHUB_SEARCH_API_BASE_URL, {
      params: {
        q: query,
        per_page: RESULTS_PER_PAGE,
        page: page,
      },
    });

    return {
      items: response.data.items,
      total_count: response.data.total_count,
      per_page: RESULTS_PER_PAGE,
    };
  } catch (error) {
    console.error("Error searching GitHub users:", e);

    if (error.response && error.response.status === 422) {
      throw new Error("Invalid search query. Please refine your search terms.");
    }
    throw error;
  }
};
