import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeAuth } from '../utils/auth';
import { useCommandListener } from '../hooks/useCommandListener';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const navigate = useNavigate();

  useCommandListener(setOutput);

  async function handleLogin() {
    setLoading(true);
    const result = await fakeAuth();
    setLoading(false);
    if (result) {
      localStorage.setItem('login', 'true');
      navigate('/Config');
    }
  }

  return (
    <div className="flex-center" style={{ flexDirection: 'column', gap: '1rem' }}>
      <button onClick={handleLogin} disabled={loading} className="btn">
        {loading ? (
          <>
            <FontAwesomeIcon icon="spinner" spin />&nbsp;&nbsp;Login
          </>
        ) : (
          'Login'
        )}
      </button>
      <pre>{output}</pre>
    </div>
  );
}
