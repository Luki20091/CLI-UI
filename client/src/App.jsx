import React, { useState } from 'react';
import { runCommand } from './utils/api';

export default function App() {
  const [output, setOutput] = useState('');

  async function testVersion() {
    setOutput('Loading...');
    const result = await runCommand('--version');
    if (result.error) setOutput(`Error: ${result.error}`);
    else setOutput(result.output);
  }

  return (
    <div>
      <button onClick={testVersion}>Run --version</button>
      <pre>{output}</pre>
    </div>
  );
}
