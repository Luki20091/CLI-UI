import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeAuth } from '@/utils/auth';
import { LogIn } from 'lucide-react';

export default function Login() {
  const nav = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="items-center text-center card-body">
          <h2 className="card-title">Witaj!</h2>
          <p>Kliknij, żeby się zalogować</p>
          <button
            className="flex items-center gap-2 mt-4 btn btn-primary"
            onClick={async () => (await fakeAuth()) && nav('/config')}
          >
            <LogIn className="w-5 h-5" />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
