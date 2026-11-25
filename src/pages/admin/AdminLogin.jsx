import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { apiFetch } from '../../services/api';

function AdminLogin() {
  const [email, setEmail] = useState('admin@jbsonsenergy.com');
  const [password, setPassword] = useState('adminPassword123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem('jbsons_admin_token', response.token);
      localStorage.setItem('jbsons_admin_user', JSON.stringify(response.user));
      window.dispatchEvent(new Event('jbsons-auth-change'));
      navigate('/admin');
    } catch (loginError) {
      setError(loginError.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-120px)] items-center justify-center bg-[#0b0b0c] px-4 py-20">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 text-[#ff8c1a] text-2xl font-black">⚡</div>
          <h1 className="mt-6 text-2xl font-black uppercase tracking-tight text-white">JB & SONS POWER SOLUTIONS</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#ff8c1a]">ADMIN PORTAL</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]"
              placeholder="admin@jbsonsenergy.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]"
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <div className="flex items-center justify-between text-sm text-[#d1d5db]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-[#0d0d0f]" />
              Remember Me
            </label>
            <button type="button" className="text-[#ff8c1a] hover:text-[#ff9d2e]">Forgot Password?</button>
          </div>

          <button type="submit" disabled={loading} className="w-full rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e] disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'LOGGING IN...' : 'LOGIN'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-[#d1d5db]">
          Authorized personnel only.
        </p>
      </div>
    </main>
  );
}

export default AdminLogin;
