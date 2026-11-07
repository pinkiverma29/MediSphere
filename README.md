# 🏥 MediSphere — Healthcare Management Platform

A full-stack healthcare management platform built as part of the **Infosys Springboard Internship**, covering patient records, role-based access, vitals validation, and AI-driven clinical predictions.

> Built by a 3-member team. This repo reflects my individual contributions and the work I personally integrated and extended — see [My Contributions](#-my-contributions) below.

---

## 🚀 Live Demo

- **Frontend:** _[add your deployed Vercel link here]_
- **Backend API:** _[add your deployed Render link here]_

---

## ✨ Key Features

- **Patient Management** — register and track patients, vitals, and health records
- **Role-Based Access Control (RBAC)** — Admin, Doctor, Patient, Receptionist roles
- **Alert Routing & Acknowledgment** — clinical alerts routed to the right staff, with false-alert-rate tracking
- **AI Predictions** — model accuracy tracking, federated learning convergence, SHAP explainability
- **Vitals Range Validation** — flags out-of-range patient vitals before they're stored
- **Clinical Safety Checks** — careplan safety, drug interaction validation, guideline compliance
- **Provider Approval Workflow** — clinical outcomes reviewed and approved by doctors

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Backend | Java, Spring Boot, Spring Security, JWT |
| Database | PostgreSQL, Hibernate/JPA |
| Build Tools | Maven, npm |

---

## 👩‍💻 My Contributions

- Connected the **Patients module** end-to-end to the real Spring Boot + PostgreSQL backend — including live registration, data fetch, and connection-status handling with graceful fallback.
- Integrated multiple teams' independently-built frontend modules (FHIR validation, HIPAA audit logs, model accuracy, alert routing, RBAC, and more) into a single unified dashboard.
- Set up environment-based configuration (`.env`) so the same codebase runs locally and in production without code changes.
- Diagnosed and resolved full local dev-environment setup: Java/Node toolchain, PostgreSQL authentication, and PowerShell execution-policy issues.
- Deployed the application (frontend on Vercel, backend + database on Render).

---

## 🏗️ Architecture

```
React (Vite) Frontend  →  Spring Boot REST API  →  PostgreSQL
     (Vercel)                   (Render)             (Render)
```

---

## 💻 Running Locally

### Prerequisites
- Node.js 18+
- Java 21
- PostgreSQL 16

### 1. Backend
```bash
cd medisphere-backend
# create a database named `medisphere` in PostgreSQL first
./mvnw spring-boot:run
```

### 2. Frontend
```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

---

## 📄 License

MIT
