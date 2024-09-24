import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [authStatus, setAuthStatus] = useState('checking');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('http://localhost:5000/TrainingApp/users/authCheck', { withCredentials: true });
        setAuthStatus('authenticated');
      } catch (error) {
        setAuthStatus('unauthenticated');
      }
    };

    checkAuth();
  }, []);

  if (authStatus === 'checking') {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (authStatus === 'unauthenticated') {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;