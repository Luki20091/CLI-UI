import React from 'react';

export function LoadingDots() {
  return (
    <div className="flex space-x-1 text-gray-400 animate-pulse">
      <span>.</span><span>.</span><span>.</span>
    </div>
  );
}
