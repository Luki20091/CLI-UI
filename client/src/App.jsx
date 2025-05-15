import { useState, useEffect } from 'react'
import { fetchUsers } from './services/api'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
      .then(data => {
        console.log('Odpowiedź z API:', data)
        // jeśli `data` to obiekt z kluczem `users`, użyj data.users
        setUsers(Array.isArray(data) ? data : data.users || [])
      })
      .catch(err => {
        console.error('Błąd pobierania użytkowników:', err)
        setUsers([]) // fallback na pustą tablicę
      })
  }, [])

  return (
    <>
      <div className="p-8 text-white shadow-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-2xl animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold">✨ Tailwind działa!</h1>
        <p className="text-lg">To jest stylowana karta z gradientem, cieniem i zaokrągleniami.</p>
        <button className="px-6 py-2 mt-6 font-semibold text-purple-600 transition-all duration-300 bg-white rounded-full shadow hover:bg-purple-100">
          Kliknij mnie
        </button>
      </div>

      <div className="flex gap-4 my-4">
        <a href="https://vite.dev" target="_blank" rel="noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="my-4 card">
        <button onClick={() => setCount(c => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <h2 className="mt-6 mb-2">Użytkownicy:</h2>
      <ul className="list-disc list-inside">
        {Array.isArray(users) && users.length > 0 ? (
          users.map(u => <li key={u.id}>{u.name}</li>)
        ) : (
          <li>Brak użytkowników</li>
        )}
      </ul>

      <p className="mt-8 read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
