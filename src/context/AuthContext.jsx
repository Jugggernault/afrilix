import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { BASE_URL, CLIENT_ID, CLIENT_SECRET } from '../utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  // Fonction pour récupérer le token
  const fetchAccessToken = useCallback(async () => {
    if (accessToken) return; // Don't fetch if we already have a token

    try {
      const response = await fetch('https://81.91.228.149:32000/baas/auth/v1.0/oauth2/token?grant_type=client_credentials&client_id=71fc823ddb3584e6cd636fe047606cfb&client_secret=6fc256e595c715e8e3345397ab9c8f60ea1504b2c7b8af50',
        { method: 'POST' }
      );

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du token');
      }
      const data = await response.json();
      console.log(data)
      setAccessToken(data.access_token);
    } catch (error) {
      console.error('Erreur lors de la récupération du token :', error);
      throw error;
    }
  }, [accessToken]); // Only recreate if accessToken changes

  // Fetch the token when the component mounts
  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  const contextValue = {
    accessToken,
    fetchAccessToken: useCallback(() => {
      if (!accessToken) {
        return fetchAccessToken();
      }
      return Promise.resolve();
    }, [accessToken, fetchAccessToken]),
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

