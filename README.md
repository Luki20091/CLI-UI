# CLI-UI

A simple full-stack app using **Vite + React** (client) and **Node.js + Express** (server), ready to scale.

## 🧰 Tech Stack

- React + Vite + Tailwind CSS
- Node.js + Express
- Axios
- Workspaces + Concurrently

## 📦 Project Structure

```bash
cli-ui/
├── client/    # Frontend - React + Vite + Tailwind CSS
├── server/    # Backend (optional) - Node.js + Express API
└── package.json  # Main dependencies and workspace configuration
```

## 🚀 Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/Luki20091/CLI-UI.git
cd CLI-UI
```

### 2. Client
```bash
cd client
npm install
npm install history
npm install --save-dev vite
```

### 3. Server
```bash
cd ../server
npm install
npm install --save-dev ts-node-dev
```

### 4. Run
```bash
cd ..
npm run dev
```