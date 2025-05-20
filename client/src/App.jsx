// client/src/App.jsx
import React, { useState } from 'react';
import { useCommandListener } from './hooks/useCommandListener';

export default function App() {
  const [output, setOutput] = useState('');

  useCommandListener(setOutput);

  return (
    <div>
      <div class="flex-center">
        <button data-command="--help" class="btn center">Run --help</button>
        <button data-command="--version" class="btn center">Run --version</button>
        {/* Add more buttons with data-command/data-args as needed */}
      </div>


      <pre>{output}</pre>
    </div>
  );
}
