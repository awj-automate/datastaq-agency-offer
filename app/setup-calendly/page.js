'use client';
import { useState } from 'react';

export default function SetupCalendly() {
  const [token, setToken] = useState('');
  const [eventTypes, setEventTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchEventTypes() {
    if (!token.trim()) return;
    setLoading(true);
    setError('');
    setEventTypes([]);

    try {
      const userRes = await fetch('https://api.calendly.com/users/me', {
        headers: { Authorization: `Bearer ${token.trim()}` },
      });
      if (!userRes.ok) throw new Error('Invalid token or API error');
      const userData = await userRes.json();
      const userUri = userData.resource.uri;

      const etRes = await fetch(
        `https://api.calendly.com/event_types?user=${encodeURIComponent(userUri)}&active=true`,
        { headers: { Authorization: `Bearer ${token.trim()}` } }
      );
      if (!etRes.ok) throw new Error('Failed to fetch event types');
      const etData = await etRes.json();

      setEventTypes(
        etData.collection.map((e) => ({ name: e.name, uri: e.uri, duration: e.duration }))
      );
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-ds-bg flex items-center justify-center p-6">
      <div className="glass rounded-2xl p-8 max-w-xl w-full space-y-6">
        <h1 className="font-jakarta font-bold text-2xl text-white">Calendly Setup Helper</h1>
        <p className="text-ds-muted text-sm">
          Paste your Calendly Personal Access Token below to find your Event Type URI.
        </p>

        <div>
          <label className="block text-ds-muted text-xs font-jakarta mb-1.5">API Token</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white font-jakarta placeholder:text-white/20 focus:outline-none focus:border-[#EDB325]/50 transition"
            placeholder="eyJhbGciOi..."
          />
        </div>

        <button
          onClick={fetchEventTypes}
          disabled={loading || !token.trim()}
          className="btn-primary text-sm py-2.5 px-6 disabled:opacity-50"
        >
          {loading ? 'Fetching...' : 'Get Event Types'}
        </button>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        {eventTypes.length > 0 && (
          <div className="space-y-3">
            <p className="text-white font-jakarta font-semibold text-sm">Your Event Types:</p>
            {eventTypes.map((et) => (
              <div key={et.uri} className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                <p className="text-white font-jakarta font-medium text-sm">
                  {et.name} <span className="text-ds-muted">({et.duration} min)</span>
                </p>
                <p className="text-[#EDB325] font-jakarta text-xs break-all select-all">{et.uri}</p>
                <p className="text-ds-subtle text-[11px]">
                  ↑ Copy this URI and add it as <code className="text-white/60">CALENDLY_EVENT_TYPE_URI</code> in Vercel
                </p>
              </div>
            ))}
          </div>
        )}

        <p className="text-ds-subtle text-[11px]">
          Delete this page after setup. It is not linked anywhere.
        </p>
      </div>
    </div>
  );
}
