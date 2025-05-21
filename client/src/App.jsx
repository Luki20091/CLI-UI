import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('login') === 'false' ? false : true; //to change later
    if (!loggedIn) {
      navigate('/Login');
    }
  }, [navigate]);

  return (
    <div className="flex-center">
      <p>Ładowanie...</p>
    </div>
  );
}