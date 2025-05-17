// client/src/App.jsx
import React, { useState } from 'react';
import { useCommandListener } from './hooks/useCommandListener';

export default function App() {
  const [output, setOutput] = useState('');

  useCommandListener(setOutput);

  return (
    <div>
      <h1>Corebrain CLI Interface</h1>
      <div>
        <button data-command="--version">Run --version</button>
        {/* Add more buttons with data-command/data-args as needed */}
      </div>
      <pre>{output}</pre>
    </div>
  );
}
