import { createContext, useContext, useState, useCallback } from 'react';
import {BASE_URL,CLIENT_ID,CLIENT_SECRET} from './../utils'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  // Fonction pour récupérer le token
  const fetchAccessToken = useCallback(async () => {
    try {
      const response = await fetch(
        `${BASE_URL}baas/auth/v1.0/oauth2/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        { method: 'POST' }
      );
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du token');
      }
      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error('Erreur lors de la récupération du token :', error);
      throw error;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, fetchAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
