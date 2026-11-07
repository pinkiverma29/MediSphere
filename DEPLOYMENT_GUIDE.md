# MediSphere — Deployment Guide (Hinglish)

Deploy ke 4 steps hain:
1. Code ko apne GitHub pe push karo
2. Render pe PostgreSQL database banao
3. Render pe backend deploy karo (Docker se)
4. Vercel pe frontend deploy karo

Is guide ke baad bhi tumhare laptop pe sab waise hi chalta rahega.

---

## Step 1 — GitHub pe push karo

1. Git installed hai? Terminal mein `git --version` chalao. Na ho to:
   `winget install Git.Git` (phir VS Code poora band karke kholo)
2. github.com pe naya repo banao: **New repository** → naam `MediSphere` → **Public** → README/.gitignore add MAT karo → Create.
3. Is project folder (jisme `package.json` hai) ke andar terminal mein:

```
git init
git add .
git commit -m "MediSphere - full-stack healthcare platform"
git branch -M main
git remote add origin https://github.com/<tumhara-username>/MediSphere.git
git push -u origin main
```

Pehli baar push par browser mein GitHub login/authorize ka popup aayega — allow kar do.

---

## Step 2 — Database (Render PostgreSQL)

1. https://render.com → GitHub se sign up/login.
2. **New +** → **PostgreSQL** → name: `medisphere-db` → **Region: Singapore** (India ke liye sabse paas) → Free plan → Create.
3. Ban jaane ke baad database ka page khulega. Wahan ye 4 cheezein dikhengi — alag se copy karke rakh lo:
   - **Hostname** (internal wala, jaise `dpg-xxxxx-a`)
   - **Database** (naam)
   - **Username**
   - **Password**

> Free database ~30 din baad expire ho jata hai (Render dashboard mein exact date dikhti hai). Demo ke liye theek hai; lambe time ke liye Neon.tech ka free Postgres bhi chalega (wahi 3 env variables).

---

## Step 3 — Backend (Render Web Service, Docker)

1. **New +** → **Web Service** → apna `MediSphere` GitHub repo select karo.
2. Settings:
   - **Region:** Singapore (database wala hi)
   - **Root Directory:** `medisphere-backend`
   - **Runtime / Language:** **Docker** (Render ko Java ke liye Docker chahiye; `Dockerfile` already is folder mein hai)
   - **Instance Type:** Free
3. **Environment Variables** add karo:

| Key | Value |
|---|---|
| `DATABASE_URL` | `jdbc:postgresql://<Hostname>:5432/<Database>` |
| `DATABASE_USERNAME` | Step 2 wala Username |
| `DATABASE_PASSWORD` | Step 2 wala Password |
| `JWT_SECRET` | koi bhi lambi random string (40+ characters) |

   Dhyan do: `DATABASE_URL` `postgres://` se nahi, **`jdbc:postgresql://`** se shuru hona chahiye, aur username/password URL ke andar mat daalo.
4. **Create Web Service** → pehla build 5-10 minute le sakta hai.
5. Jab "Live" dikhe, upar ek URL milega: `https://medisphere-backend-xxxx.onrender.com`
6. **Test:** browser mein `https://<tumhara-url>/api/v1/patients` kholo. `[]` (khaali list) ya patients ki list aaye = backend + database dono sahi.

---

## Step 4 — Frontend (Vercel)

1. https://vercel.com → GitHub se login → **Add New → Project** → `MediSphere` repo → Import.
2. Settings:
   - **Root Directory:** khaali chhod do (repo ka root)
   - Framework: **Vite** (apne aap detect hoga); Build `npm run build`, Output `dist`
3. **Environment Variables:**
   - `VITE_BACKEND_URL` = Step 3 wala Render URL (`https://medisphere-backend-xxxx.onrender.com`)
4. **Deploy**. Link milega: `https://medisphere-xxxx.vercel.app` — **ye wahi link hai jo resume/mam ko dena hai.**

> Agar baad mein `VITE_BACKEND_URL` badlo, to Vercel mein **Redeploy** karna padega (ye variable build ke time lagta hai).

---

## Jaanne layak baatein

- **Pehla load slow hoga:** Render free backend 15 min idle rehne par so jata hai, wapas jagne mein ~1 minute lagta hai. Mam ko dikhane se 2 minute pehle `https://<backend-url>/api/v1/patients` ek baar khol lo, phir Patients page par green badge dikhega.
- **Sirf Patients page live database se connected hai.** Baaki pages (Dashboard, Predictions, Alerts, Team-C/D ke modules) local demo data par chalte hain, deployed version mein bhi.
- **Local pe sab waise hi chalega:** `.\mvnw.cmd spring-boot:run` + `npm run dev`. Env variables na hon to wahi localhost defaults use hote hain.
- **Secrets:** `application.properties` mein sirf tumhare laptop ke local database ka default password hai. Deployed database ka password GitHub par kabhi mat daalna — wo sirf Render ke Environment Variables mein rahega.
