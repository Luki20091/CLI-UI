// client/src/hooks/useCommandListener.jsx
import { useEffect } from 'react';
import { runCommandArgs } from '../utils/api';

/**
 * Hook to listen for clicks on any button[data-command] and execute the CLI command.
 * Buttons should specify:
 *   data-command="--version"
 *   data-args="arg1,arg2,..."
 */
export function useCommandListener(setOutput) {
  useEffect(() => {
    async function handler(e) {
      const btn = e.target.closest('button[data-command]');
      if (!btn) return;
      const command = btn.getAttribute('data-command');
      const argsAttr = btn.getAttribute('data-args');
      const args = argsAttr ? argsAttr.split(',') : [];
      setOutput('Loading...');
      const result = await runCommandArgs([command, ...args]);
      setOutput(result.error ? `Error: ${result.error}` : result);
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [setOutput]);
}