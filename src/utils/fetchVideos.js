import { BASE_URL } from "./../utils";

const fetchVideos = async (accessToken, refreshToken) => {
  const makeRequest = async (token) => {
    try {
      
      const response = await fetch(
        `${BASE_URL}service/AFRILIX__Afrilix/0.0.1/videos`,
        {
          method: "GET",
          headers: {
            "access-token": token,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        throw new Error(`Erreur : ${response.status}`);
      }
      const data = await response.json();
      return data.result;
    } catch (error) {
      if (error.message === "Unauthorized" && refreshToken) {
        const newToken = await refreshToken();
        return makeRequest(newToken);
      }
      console.error(
        "Erreur lors de la récupération des vidéos :",
        error.message
      );
      throw error;
    }
  };

  return makeRequest(accessToken);
};

export default fetchVideos;
