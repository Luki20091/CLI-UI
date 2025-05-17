import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// POST /commands/:command?args[]=...
app.post('/commands/:command', (req, res) => {
  const command = req.params.command;       // np. "--version" lub "ask"
  const args = req.body.args || [];         // np. ["--help"]

  // Jeżeli potrzebujesz ścieżki do skryptu Python:
  // const scriptPath = path.resolve(__dirname, '../corebrain-cs/your_script.py');
  // const pythonArgs = [scriptPath, command, ...args];
  const pythonArgs = [command, ...args];

  const child = spawn('corebrain', pythonArgs, { shell: true });

  let stdout = '';
  let stderr = '';

  child.stdout.on('data', data => stdout += data.toString());
  child.stderr.on('data', data => stderr += data.toString());

  child.on('close', code => {
    if (code === 0) {
      res.json({ output: stdout.trim() });
    } else {
      res.status(500).json({ error: stderr.trim() || 'Unknown error' });
    }
  });
});

const PORT = 5140;
app.listen(PORT, () => {
  console.log(`Node server running on http://localhost:${PORT}`);
});
