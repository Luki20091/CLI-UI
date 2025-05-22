/**
 * General helper to execute any Corebrain CLI command via HTTP.
 * @param {string[]} argsArray - Array of command name and arguments (e.g., ["--version"]).
 * @returns {Promise<string|{error: string}>} - Command output or error.
 */
export async function runCommandArgs(argsArray) {
  try {
    const argsString = argsArray.join(' ');
    const res = await fetch('http://localhost:5140/api/command', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ arguments: argsString }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || data.error || JSON.stringify(data));
    return data;
  } catch (error) {
    return { error: error.message };
  }
}