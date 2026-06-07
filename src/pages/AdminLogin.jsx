import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  async function login(event) {
    event.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Invalid credentials or API server is not running.');
      const data = await response.json();
      localStorage.setItem('adminToken', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="page section admin-login">
      <SectionHeading eyebrow="Admin Panel" title="Secure admin login." text="Use the credentials from your server environment variables." />
      <form className="contact-form glass-card" onSubmit={login}>
        <input required type="email" placeholder="Admin email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input required type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="btn primary" type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
}
