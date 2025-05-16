import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login  = lazy(() => import('./routes/Login'));
const Config = lazy(() => import('./routes/Config'));
const Chat   = lazy(() => import('./routes/Chat'));

export default function App() {
  return (
    <Suspense fallback={<div className="mt-8 text-center text-white">Ładowanie…</div>}>
      <Routes>
        <Route path="/"       element={<Login />} />
        <Route path="/config" element={<Config />} />
        <Route path="/chat"   element={<Chat />} />
      </Routes>
    </Suspense>
  );
}
