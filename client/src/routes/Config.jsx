import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommandListener } from '../hooks/useCommandListener'; 

export default function Config() {
  const [output, setOutput] = useState('');
  const navigate = useNavigate();
  useCommandListener(setOutput);

  return (
    <div>
      <div class="flex-center">
        <div className="flex-center">
          <button data-command="--help"         className="btn">Run --help</button>
          <button data-command="--version"      className="btn">Run --version</button>
          <button data-command="--list-configs" className="btn">Run --list-configs</button>
          <button data-command="--remove-config" className="btn">Run --remove-config</button>
          <button data-command="--show-schema"  className="btn">Run --show-schema</button>
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