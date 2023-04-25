const BASE_URL = "https://api.covid19api.com/";

const handleResponse = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const api = {
  get: (endpoint) => fetch(BASE_URL + endpoint, {}).then(handleResponse)
};
