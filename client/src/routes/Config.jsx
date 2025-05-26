import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommandListener } from '../hooks/useCommandListener'; 
import { unAuth } from '../utils/auth';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Config() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const navigate = useNavigate();
  
  useCommandListener(setOutput);

  async function handleChat() {
    navigate('/Chat');
  }

  async function handleLogout() {
    setLoading(true);
    const result = await unAuth();
    setLoading(false);
    if (result) {
      navigate('/Login');
    }
  }

  return (
    <div>
      <div class="flex-center">
        <div class="flex-center">
          <button onClick={handleLogout} disabled={loading} className="btn">
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin/>&nbsp;&nbsp;Logout
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faComments} />&nbsp;&nbsp;Logout
              </>
            )}
          </button>
          <button onClick={handleChat} className="btn">
            <FontAwesomeIcon icon={faComments} />&nbsp;&nbsp;Chat
          </button>
          <button data-command="-h" className="btn">Run -h</button>
          <button data-command="--version" className="btn">Run --version</button>
          <button data-command="--check-status" className="btn">Run --check-status</button>
          <button data-command="--authentication" className="btn">Run --authentication</button>
          <button data-command="--test-auth" className="btn">Run --test-auth</button>

          <button data-command="--create-user" className="btn">Run --create-user</button>
          <button data-command="--configure" className="btn">Run --configure</button>
          <button data-command="--list-configs" className="btn">Run --list-configs</button>
          <button data-command="--show-schema" className="btn">Run --show-schema</button>
          <button data-command="--woami" className="btn">Run --woami</button>
        </div>

      </div>


      <pre>{output}</pre>
    </div>
  );
}