import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { BASE_URL, CLIENT_ID, CLIENT_SECRET } from '../utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const fetchAccessToken = useCallback(async () => {
    if (accessToken) return; // Don't fetch if we already have a token

    try {
      const response = await fetch(
        `${BASE_URL}baas/auth/v1.0/oauth2/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        { method: 'POST' }
      );

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du token');
      }
      const data = await response.json();
      console.log(data);
      setAccessToken(data.access_token);
    } catch (error) {
      console.error('Erreur lors de la récupération du token :', error);
      throw error;
    }
  }, []); // Remove accessToken from dependencies

  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  const contextValue = {
    accessToken,
    fetchAccessToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

