# smart-events-app

Smart Events platform with:
- Backend API (Node.js + Prisma + MySQL)
- Frontend web app (Vite + React)
- Mobile app (Expo)

## Prerequisites

- Node.js 18+
- npm 9+
- MySQL server running locally

## Project Structure

- `backend` - API server
- `frontend` - Web client
- `mobile` - Expo mobile client

## 1) Backend Setup (MySQL)

From project root:

```bash
cd backend
npm install
```

Create env file (first time only):

```bash
copy .env.example .env
```

Use these DB values in `.env`:
- `DB_SERVER_NAME=mysql`
- `DB_SERVER=localhost`
- `DB_PORT=3306`
- `DB_USER=root`
- `DB_PASS=root`
- `DB_NAME=event_handler_db`

Generate DB URL and migrate:

```bash
npm run prepare-db-url
npm run migrate
```

Health check:

```bash
npm run db:check
```

Start backend:

```bash
npm run dev
```

Backend runs on `http://localhost:3000`.

## 2) Frontend Setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Make sure `frontend/.env` contains:

```env
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

## 3) Mobile Setup (Expo)

In a new terminal:

```bash
cd mobile
npm install
npm start
```

## Notes

- Do not run `npm install` at repository root (no root `package.json`).
- If you see a Paystack warning, the server can still run; only payment features are affected.
