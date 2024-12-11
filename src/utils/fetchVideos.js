import { useAuth } from "./../context/AuthContext";

const fetchVideos = async () => {
  const { accessToken, fetchAccessToken } = useAuth();

  const makeRequest = async (token) => {
    try {
      const response = await fetch(
        `${BASE_URL}service/AFRILIX__Afrilix/0.0.1/all-videos`,
        {
          method: "GET",
          headers: {
            "access-token": token,
          },
        }
      );
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
      if (!response.ok) {
        throw new Error(`Erreur : ${response.status}`);
      }
      const data = await response.json();
      return data.result;
    } catch (error) {
      if (error.message === "Unauthorized") {
        // Si non autorisé, on récupère un nouveau token et on réessaie
        await fetchAccessToken();
        const newToken = accessToken; // Mis à jour par fetchAccessToken
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