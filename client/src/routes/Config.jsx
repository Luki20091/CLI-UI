import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommandListener } from '../hooks/useCommandListener'; 
import { fakeUnAuth } from '../utils/auth';

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
    const result = await fakeUnAuth();
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
          <button data-command="--help" className="btn">Run --help</button>
          <button data-command="--version" className="btn">Run --version</button>
          <button data-command="--list-configs" className="btn">Run --list-configs</button>
          <button data-command="--remove-config" className="btn">Run --remove-config</button>
          <button data-command="--show-schema" className="btn">Run --show-schema</button>
          <button data-command="--extract-schema" className="btn">Run --extract-schema</button>
          
          <button
            data-command="--output-file"
            data-args="schema.sql"
            className="btn"
          >
            Run --output-file
          </button>
          <button
            data-command="--config-id"
            data-args="myConfigId"
            className="btn"
          >
            Run --config-id
          </button>
          <button
            data-command="--token"
            data-args="ABC123"
            className="btn"
          >
            Run --token
          </button>
          <button
            data-command="--api-key"
            data-args="XYZ789"
            className="btn"
          >
            Run --api-key
          </button>
          <button data-command="--api-url" className="btn">
            Run --api-url
          </button>
          <button data-command="--sso-url" className="btn">
            Run --sso-url
          </button>
          <button data-command="--login"       className="btn">Run --login</button>
          <button data-command="--test-auth"   className="btn">Run --test-auth</button>
        </div>

      </div>


      <pre>{output}</pre>
    </div>
  );
}