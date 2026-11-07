@echo off
start "MediSphere Backend" cmd /k "cd /d %~dp0backend && npm install && npm start"
start "MediSphere Frontend" cmd /k "cd /d %~dp0 && npm install && npm run dev"
