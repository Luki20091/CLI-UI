import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommandListener } from '../hooks/useCommandListener';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export default function Config() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [activeForm, setActiveForm] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useCommandListener(setOutput);

  async function handleChat() {
    navigate('/Chat');
  }

  async function handleCommand(command, args = '') {
    setLoading(true);
    setOutput('');
    setActiveForm(null);
    try {
      const res = await fetch('http://localhost:5140/api/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ arguments: `${command} ${args}`.trim() }),
      });
      const data = await res.json();
      setOutput(data.output || data.error || JSON.stringify(data));
    } catch (error) {
      setOutput(error.message);
    }
    setLoading(false);
  }

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (activeForm === '--create-user') {
      handleCommand('--create-user', `${formData.email} ${formData.password}`);
    } else if (activeForm === '--configure') {
      handleCommand('--configure', `${formData.config_id || ''}`);
    }
    setFormData({});
  }

  return (
    <div>
      <div className="flex-center">
        <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={handleChat} className="btn">
            <FontAwesomeIcon icon={faComments} />&nbsp;&nbsp;Chat
          </button>
          <button onClick={() => handleCommand('-h')} className="btn">Run -h</button>
          <button onClick={() => handleCommand('--version')} className="btn">Run --version</button>
          <button onClick={() => handleCommand('--check-status')} className="btn">Run --check-status</button>
          <button onClick={() => handleCommand('--authentication')} className="btn">Run --authentication</button>
          <button onClick={() => handleCommand('--test-auth')} className="btn">Run --test-auth</button>
          <button onClick={() => setActiveForm('--create-user')} className="btn">Run --create-user</button>
          <button onClick={() => setActiveForm('--configure')} className="btn">Run --configure</button>
          <button onClick={() => handleCommand('--list-configs')} className="btn">Run --list-configs</button>
          <button onClick={() => handleCommand('--show-schema')} className="btn">Run --show-schema</button>
          <button onClick={() => handleCommand('--whoami')} className="btn">Run --whoami</button>
        </div>
      </div>

      {/* Form for --create-user */}
      {activeForm === '--create-user' && (
        <form onSubmit={handleFormSubmit} className="flex flex-col max-w-xs gap-2 p-4 mx-auto my-4 bg-gray-100 rounded">
          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              value={formData.email || ''}
              onChange={handleFormChange}
              className="w-full input input-bordered"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              required
              value={formData.password || ''}
              onChange={handleFormChange}
              className="w-full input input-bordered"
            />
          </label>
          <button type="submit" className="btn btn-primary">Create User</button>
        </form>
      )}

      {/* Form for --configure */}
      {activeForm === '--configure' && (
        <form onSubmit={handleFormSubmit} className="flex flex-col max-w-xs gap-2 p-4 mx-auto my-4 bg-gray-100 rounded">
          <label>
            Config ID (optional):
            <input
              type="text"
              name="config_id"
              value={formData.config_id || ''}
              onChange={handleFormChange}
              className="w-full input input-bordered"
            />
          </label>
          <button type="submit" className="btn btn-primary">Configure</button>
        </form>
      )}

      <pre>
        {loading
          ? 'Loading...'
          : typeof output === 'object' && output !== null
            ? output.output || output.error || JSON.stringify(output)
            : output}
      </pre>
    </div>
  );
}
