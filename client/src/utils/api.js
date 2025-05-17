export async function runCommand(command, args = []) {
  try {
    const res = await fetch(
      `http://localhost:5140/commands/${encodeURIComponent(command)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ args }),
      }
    );

    const payload = await res.json();

    if (!res.ok) {
      throw new Error(payload.error || 'Server error');
    }
    return payload.output;
  } catch (error) {
    return { error: error.message };
  }
}
