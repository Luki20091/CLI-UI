import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Config');
  }, [navigate]);

  return (
    <div className="flex-center">
      <p>Loading...</p>
    </div>
  );
}