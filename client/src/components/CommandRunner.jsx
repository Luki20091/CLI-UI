import { useState } from 'react';
import { runCommand } from '../utils/api';

export default function CommandRunner() {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState('');

    const handleRun = async () => {
        const result = await runCommand(command);
        setOutput(result.output || result.error);
    };

    return (
        <div className="p-6">
            <h2 className="mb-4 text-xl font-bold">Wykonaj komendę</h2>
            <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Wpisz komendę np. dir albo git status"
                className="w-full p-2 mb-4 border rounded"
            />
            <button
                onClick={handleRun}
                className="px-4 py-2 text-white bg-blue-600 rounded"
            >
                Wykonaj
            </button>
            <pre className="p-4 mt-4 whitespace-pre-wrap bg-gray-100 rounded">
                {output}
            </pre>
        </div>
    );
}
