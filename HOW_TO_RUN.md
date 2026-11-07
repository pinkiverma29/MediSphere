# How to Run — Everything in One Folder

This folder now has everything:
- `src/` — the main frontend (React + Vite) — Dashboard, Patients, Alerts, Team-C/D modules, etc.
- `medisphere-backend/` — **your real GitHub backend** (Spring Boot + PostgreSQL). The
  Patients page is wired to this.
- `backend/` — a separate, older Node.js backend (used only for the Vitals feature on the
  Patients page; not your GitHub project). You can ignore this one.

You need **2 terminals running at the same time**.

---

## One-time setup (only do this once)

1. **Node.js** — `winget install OpenJS.NodeJS.LTS` (skip if `node -v` already works)
2. **Java 17** — `winget install EclipseAdoptium.Temurin.17.JDK`
3. **PostgreSQL** — `winget install PostgreSQL.PostgreSQL.16`
   - When it asks for a password, set it to: `MediSphere@123`
4. Create the database:
   ```
   psql -U postgres -c "CREATE DATABASE medisphere;"
   ```
   (password: `MediSphere@123`)
5. If `npm`/`mvnw` give a "scripts disabled" error, run once:
   ```
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

After installing anything new, **fully close and reopen VS Code** before continuing.

---

## Every time you want to run the project

**Terminal 1 — real backend:**
```
cd medisphere-backend
.\mvnw.cmd spring-boot:run
```
Wait for it to say it started on port 8080. Leave this running.

**Terminal 2 — frontend:**
```
npm install
npm run dev
```
Open the `http://localhost:5173` link it prints.

---

## Where to check it's working

Go to the **Patients** page in the sidebar:
- Top badge should turn **green**: "Live backend connected".
- Click **Add Patient** and register someone — this now saves for real into
  PostgreSQL (not just the browser).

Everything else (Alerts, Predictions, Dashboard, Team-C/D modules, etc.) still
runs on local demo data for now — only Patients is wired to the real backend
so far.
