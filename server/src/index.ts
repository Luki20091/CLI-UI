
// server/src/index.ts
import { Router, Request, Response } from 'express';
import { spawn } from 'child_process';

type ProblemDetails = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
};

const router = Router();

/**
 * POST /api/Command
 * Body: { arguments: string }
 */
router.post('/Command', (req: Request, res: Response) => {
  const argsString = typeof req.body.arguments === 'string' ? req.body.arguments.trim() : '';

  if (!argsString) {
    const pd: ProblemDetails = {
      type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
      title: 'Bad Request',
      status: 400,
      detail: 'The "arguments" field must be a non-empty string',
      instance: req.originalUrl
    };
    return res.status(400).json(pd);
  }

  // Split arguments by space (simple parser)
  const args = argsString.split(' ');
  const proc = spawn('corebrain', args, { shell: true });

  let stdout = '';
  let stderr = '';

  proc.stdout.on('data', data => stdout += data.toString());
  proc.stderr.on('data', data => stderr += data.toString());

  proc.on('close', code => {
    if (code === 0) {
      // Return the raw output as JSON string
      return res.json(stdout.trim());
    }
    const pd: ProblemDetails = {
      type: 'https://tools.ietf.org/html/rfc7231#section-6.6.1',
      title: 'Execution Error',
      status: 500,
      detail: stderr.trim() || 'Unknown error',
      instance: req.originalUrl
    };
    res.status(500).json(pd);
  });

  proc.on('error', err => {
    const pd: ProblemDetails = {
      type: 'https://tools.ietf.org/html/rfc7231#section-6.6.1',
      title: 'Spawn Error',
      status: 500,
      detail: err.message,
      instance: req.originalUrl
    };
    res.status(500).json(pd);
  });
});

export default router;

