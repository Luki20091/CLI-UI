import { Routes, Route } from 'react-router-dom';
import App from './App';
import Config from './routes/Config';
import Chat from './routes/Chat';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Config" element={<Config />} />
      <Route path="/Chat" element={<Chat />} />
    </Routes>
  );
}