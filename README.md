# SGPS — Smart Garment Production System

## One-time setup

1. **Firebase (shared database)** — see the detailed comment at the top of `src/storage.js`.
   Create a Firebase project → Firestore Database (test mode) → paste your config
   into `src/storage.js`.

2. **Run locally to test:**
   ```
   npm install
   npm run dev
   ```
   Open the printed http://localhost:5173 link.

3. **Deploy to Vercel (free):**
   - Push this folder to a new GitHub repository.
   - Go to vercel.com → Sign up with GitHub → "Add New Project" → pick this repo → Deploy.
   - Vercel auto-detects Vite. No extra settings needed.
   - You'll get a live `https://your-app.vercel.app` link that works on any phone or computer.

## Default login

Username: `admin`
Password: `admin123`
(Change this immediately after your first login, from the Admin screen.)
