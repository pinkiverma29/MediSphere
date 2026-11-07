// Client for the REAL MediSphere backend (Spring Boot + PostgreSQL)
// Source: github.com/AKSHAYA-RAVICHANDRAN2712/Infosys_Springboard_Internship_Batch_2 (medisphere-backend)
// Run it locally with: cd medisphere-backend && .\mvnw.cmd spring-boot:run  (listens on :8080)

// Uses VITE_BACKEND_URL when set (e.g. on Vercel, pointing at your deployed Render backend);
// falls back to localhost for local development.
const BACKEND_BASE = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080').replace(/\/+$/, '');

export interface BackendPatient {
  id: number;
  name: string;
  email: string;
  phone?: string;
  age: number;
}

export const BackendApi = {
  // Returns null if the backend isn't reachable (not running / CORS / network) instead of throwing,
  // so the rest of the app can gracefully fall back to local demo data.
  async getPatients(): Promise<BackendPatient[] | null> {
    try {
      const res = await fetch(`${BACKEND_BASE}/api/v1/patients`, { method: 'GET' });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  },

  async registerPatient(input: {
    name: string;
    email: string;
    phone?: string;
    age: number;
    password?: string;
  }): Promise<{ ok: true; patient: BackendPatient } | { ok: false; error: string }> {
    try {
      const res = await fetch(`${BACKEND_BASE}/api/v1/patients/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          phone: input.phone || '',
          age: input.age,
          password: input.password || 'DefaultPass@123',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        return { ok: false, error: typeof data === 'string' ? data : data?.message || `HTTP ${res.status}` };
      }
      return { ok: true, patient: data as BackendPatient };
    } catch (err: any) {
      return { ok: false, error: err?.message || 'Backend not reachable (is it running on localhost:8080?)' };
    }
  },

  // Quick reachability check, used to show a connection badge in the UI.
  async ping(): Promise<boolean> {
    try {
      const res = await fetch(`${BACKEND_BASE}/api/v1/patients`, { method: 'GET' });
      return res.ok;
    } catch {
      return false;
    }
  },
};
