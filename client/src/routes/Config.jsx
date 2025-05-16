import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Config() {
  const nav = useNavigate();
  const [flags, setFlags] = useState({
    configure: false,
    listConfigs: false,
    removeConfig: false,
    showSchema: false,
    extractSchema: false,
    loginSSO: false,
    testAuth: false,
  });
  const [fields, setFields] = useState({
    outputFile: '',
    configId: '',
    token: '',
    apiKey: '',
    apiUrl: '',
    ssoUrl: '',
  });

  const toggle = key => setFlags(f => ({ ...f, [key]: !f[key] }));
  const change = (key, val) => setFields(f => ({ ...f, [key]: val }));

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-base-100">
      <div className="w-full max-w-2xl shadow-lg card bg-base-100">
        <div className="space-y-4 card-body">
          <h2 className="text-2xl font-bold">Ustawienia Corebrain</h2>

          {/* Przełączniki */}
          {Object.entries(flags).map(([key, val]) => (
            <label key={key} className="flex items-center justify-between">
              <span className="capitalize">{`--${key}`}</span>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                checked={val}
                onChange={() => toggle(key)}
              />
            </label>
          ))}

          {/* Pola tekstowe */}
          {Object.entries(fields).map(([key, val]) => (
            <div key={key} className="flex flex-col">
              <label className="mb-1 capitalize">{`--${key}`}</label>
              <input
                type="text"
                className="w-full input input-bordered"
                value={val}
                placeholder={key}
                onChange={e => change(key, e.target.value)}
              />
            </div>
          ))}

          <div className="justify-end card-actions">
            <button
              className="btn btn-primary"
              onClick={() => nav('/chat')}
            >
              Zapisz i czat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
