import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('login'); //to change later
    console.log('loggedIn', loggedIn);
    if (!loggedIn) {
      navigate('/Login');
    } else {
      navigate('/Config');
    }
  }, [navigate]);

  return (
    <div className="flex-center">
      <p>Ładowanie...</p>
    </div>
  );
}