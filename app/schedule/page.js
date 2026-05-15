'use client';
import { useState, useEffect, useMemo } from 'react';

/* ── helpers ─────────────────────────────────────────────────── */
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function daysInMonth(d)  { return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); }
function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
function getTimezone() {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone; }
  catch { return 'America/New_York'; }
}

const REVENUE_OPTIONS = [
  'Less than $1M',
  '$1M - $5M',
  '$5M - $25M',
  '$25M+',
];

/* ── Main page ───────────────────────────────────────────────── */
export default function SchedulePage() {
  const today = useMemo(() => { const d = new Date(); d.setHours(0,0,0,0); return d; }, []);
  const timezone = useMemo(() => getTimezone(), []);

  const [step, setStep] = useState('intake');

  // intake fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [revenue, setRevenue] = useState('');

  // calendar
  const [viewMonth, setViewMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // booking
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [bookingResult, setBookingResult] = useState(null);

  /* fetch available slots when date changes */
  useEffect(() => {
    if (!selectedDate) { setSlots([]); return; }
    let cancelled = false;
    setLoadingSlots(true);
    setSlots([]);
    setSelectedSlot(null);

    const start = new Date(selectedDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(selectedDate);
    end.setHours(23, 59, 59, 999);

    fetch(`/api/calendly/availability?start_time=${start.toISOString()}&end_time=${end.toISOString()}`)
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        const available = (data.collection || [])
          .filter(s => s.status === 'available')
          .map(s => s.start_time);
        setSlots(available);
      })
      .catch(() => { if (!cancelled) setSlots([]); })
      .finally(() => { if (!cancelled) setLoadingSlots(false); });

    return () => { cancelled = true; };
  }, [selectedDate]);

  /* calendar grid */
  const firstDay = startOfMonth(viewMonth).getDay();
  const numDays = daysInMonth(viewMonth);
  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) calendarCells.push(null);
  for (let d = 1; d <= numDays; d++) calendarCells.push(d);

  function prevMonth() {
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1));
  }
  function nextMonth() {
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1));
  }
  function selectDay(day) {
    const d = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
    setSelectedDate(d);
  }
  function isPast(day) {
    const d = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
    return d < today;
  }
  function isSelected(day) {
    if (!selectedDate) return false;
    const d = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
    return isSameDay(d, selectedDate);
  }
  function isToday(day) {
    const d = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
    return isSameDay(d, today);
  }

  const canGoPrev = viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() > today.getMonth());

  /* intake submit */
  function handleIntake(e) {
    e.preventDefault();
    setStep('calendar');
  }

  /* booking submit */
  async function handleBook() {
    if (!selectedSlot) return;
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/calendly/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          start_time: selectedSlot,
          name: name.trim(),
          email: email.trim(),
          timezone,
          questions_and_answers: [
            { question: 'Website', answer: website.trim(), position: 0 },
            { question: 'Annual Revenue Range', answer: revenue, position: 1 },
          ],
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.details?.message || data.error || 'Booking failed. Please try again.');
      } else {
        setBookingResult(data.resource);
        setStep('success');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  /* shared input class */
  const inputCls = 'w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-ds-heading font-jakarta placeholder:text-ds-subtle focus:outline-none focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/10 transition';

  /* ── render ──────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-ds-bg flex flex-col">
      {/* Architectural borders */}
      <div className="fixed inset-y-0 w-px bg-black/[0.08] hidden lg:block z-0" style={{ left: '48px' }} />
      <div className="fixed inset-y-0 w-px bg-black/[0.08] hidden lg:block z-0" style={{ right: '48px' }} />

      {/* Decorative blurred gradient */}
      <div
        className="fixed top-0 right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: 'linear-gradient(96deg, #C9A227 28%, #E5C463 100%)', filter: 'blur(120px)', opacity: 0.06 }}
      />
      <div
        className="fixed bottom-0 left-[5%] w-[350px] h-[350px] rounded-full pointer-events-none -z-10"
        style={{ background: 'linear-gradient(96deg, #8C6F1E 28%, #D4AF37 100%)', filter: 'blur(100px)', opacity: 0.04 }}
      />
      {/* Animated dashed circle decoration */}
      <div className="fixed top-[15%] right-[5%] pointer-events-none -z-10 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="opacity-[0.04]">
          <circle cx="100" cy="100" r="80" stroke="#C9A227" strokeWidth="1" strokeDasharray="6 4"
            style={{ animation: 'dashScroll 4s linear infinite' }}
          />
          <circle cx="100" cy="100" r="50" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="4 4"
            style={{ animation: 'dashScroll 6s linear infinite reverse' }}
          />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 lg:px-16 py-5">
        <a href="/" className="inline-flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex-shrink-0">
            <img src="/logo.png" alt="DataStaqAI" className="w-full h-full object-contain" style={{ filter: 'brightness(0)' }} />
          </div>
          <span className="font-jakarta font-extrabold text-lg text-ds-heading" style={{ letterSpacing: '-0.03em' }}>
            DataStaq<span className="gradient-text">AI</span>
          </span>
        </a>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-start justify-center px-4 pb-16 pt-4 sm:pt-8">

        {/* ── Step 1: Intake form ──────────────────────────── */}
        {step === 'intake' && (
          <div
            className="card overflow-hidden w-full max-w-md"
            style={{ border: '6px solid rgba(236,236,236,0.5)', animation: 'blurAnimate 0.6s cubic-bezier(0.01,0.56,1,1) 0.1s both' }}
          >
            <div className="border-b border-black/[0.06] px-6 sm:px-8 py-5">
              <h1
                className="font-jakarta font-bold text-xl sm:text-2xl text-ds-heading"
                style={{ letterSpacing: '-0.03em' }}
              >
                Book a Strategy Call
              </h1>
              <p className="text-ds-muted text-sm mt-1 font-jakarta" style={{ letterSpacing: '-0.02em' }}>
                Tell us a bit about yourself first
              </p>
            </div>

            <form onSubmit={handleIntake} className="p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-ds-muted text-xs font-jakarta font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={inputCls}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-ds-muted text-xs font-jakarta font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={inputCls}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-ds-muted text-xs font-jakarta font-medium mb-1.5">Your Business&apos;s Website</label>
                <input
                  type="text"
                  required
                  pattern=".*\.\w{2,}$"
                  title="Enter a valid website (e.g. yourcompany.com)"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  className={inputCls}
                  placeholder="yourcompany.com"
                />
              </div>

              <div>
                <label className="block text-ds-muted text-xs font-jakarta font-medium mb-1.5">Annual Revenue Range</label>
                <div className="grid grid-cols-2 gap-2">
                  {REVENUE_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setRevenue(opt)}
                      className={`
                        rounded-xl px-3 py-3 text-sm font-jakarta font-medium transition-all duration-200 text-center
                        ${revenue === opt
                          ? 'bg-[#C9A227] text-white font-bold shadow-lg shadow-[#C9A227]/20'
                          : 'bg-white border border-black/10 text-ds-muted hover:border-[#C9A227]/30 hover:text-ds-heading'
                        }
                      `}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!name.trim() || !email.trim() || !website.trim() || !revenue}
                className="btn-dark w-full justify-center text-sm mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Pick a Time
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* ── Step 2: Calendar + time selection ────────────── */}
        {step === 'calendar' && (
          <div
            className="card overflow-hidden w-full max-w-3xl"
            style={{ border: '6px solid rgba(236,236,236,0.5)', animation: 'blurAnimate 0.6s cubic-bezier(0.01,0.56,1,1) 0.1s both' }}
          >
            {/* Title bar */}
            <div className="border-b border-black/[0.06] px-6 sm:px-8 py-5 flex items-start justify-between">
              <div>
                <h1
                  className="font-jakarta font-bold text-xl sm:text-2xl text-ds-heading"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  Pick a Time
                </h1>
                <p className="text-ds-muted text-sm mt-1 font-jakarta" style={{ letterSpacing: '-0.02em' }}>
                  30 min &middot; {name}
                </p>
              </div>
              <button
                onClick={() => setStep('intake')}
                className="text-ds-muted hover:text-ds-heading text-xs font-jakarta flex items-center gap-1 transition mt-1"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* ── Left: Calendar ─────────────────────────── */}
              <div className="flex-1 p-5 sm:p-8 border-b md:border-b-0 md:border-r border-black/[0.06]">
                {/* month nav */}
                <div className="flex items-center justify-between mb-5">
                  <button
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-ds-muted hover:text-ds-heading hover:bg-black/5 transition disabled:opacity-20 disabled:cursor-not-allowed"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <span className="font-jakarta font-semibold text-ds-heading text-sm" style={{ letterSpacing: '-0.02em' }}>
                    {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-ds-muted hover:text-ds-heading hover:bg-black/5 transition"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>

                {/* day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {DAYS.map(d => (
                    <div key={d} className="text-center text-[11px] font-jakarta font-semibold text-ds-subtle uppercase tracking-wider py-1">{d}</div>
                  ))}
                </div>

                {/* day grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((day, i) => {
                    if (day === null) return <div key={`e${i}`} />;
                    const past = isPast(day);
                    const sel = isSelected(day);
                    const tod = isToday(day);
                    return (
                      <button
                        key={day}
                        disabled={past}
                        onClick={() => selectDay(day)}
                        className={`
                          relative w-full aspect-square rounded-xl text-sm font-jakarta font-medium transition-all duration-200
                          flex items-center justify-center
                          ${past ? 'text-ds-subtle/40 cursor-not-allowed' : 'text-ds-muted hover:text-ds-heading hover:bg-black/5 cursor-pointer'}
                          ${sel ? '!bg-[#C9A227] !text-white font-bold shadow-lg shadow-[#C9A227]/20' : ''}
                          ${tod && !sel ? 'ring-1 ring-[#C9A227]/40' : ''}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* timezone */}
                <p className="text-[11px] text-ds-subtle mt-4 font-jakarta">
                  <svg className="inline w-3.5 h-3.5 mr-1 -mt-0.5" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  {timezone}
                </p>
              </div>

              {/* ── Right: Time slots ──────────────────────── */}
              <div className="w-full md:w-64 lg:w-72 p-5 sm:p-6 flex flex-col min-h-[320px]">
                {!selectedDate ? (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-ds-subtle text-sm text-center font-jakarta" style={{ letterSpacing: '-0.02em' }}>
                      Select a date to view<br/>available times
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-ds-heading font-jakarta font-semibold text-sm mb-3" style={{ letterSpacing: '-0.02em' }}>
                      {selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>

                    {loadingSlots ? (
                      <div className="flex-1 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-ds-muted text-sm font-jakarta">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20"/>
                            <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                          Loading times...
                        </div>
                      </div>
                    ) : slots.length === 0 ? (
                      <div className="flex-1 flex items-center justify-center">
                        <p className="text-ds-subtle text-sm text-center font-jakarta">
                          No available times<br/>on this date
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 overflow-y-auto max-h-72 pr-1 flex-1 no-scrollbar">
                        {slots.map(slot => {
                          const active = selectedSlot === slot;
                          return (
                            <button
                              key={slot}
                              onClick={() => setSelectedSlot(slot)}
                              className={`
                                w-full rounded-xl px-4 py-2.5 text-sm font-jakarta font-medium transition-all duration-200 text-center
                                ${active
                                  ? 'bg-[#C9A227] text-white font-bold shadow-lg shadow-[#C9A227]/20'
                                  : 'border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227]/5 hover:border-[#C9A227]/50'
                                }
                              `}
                            >
                              {formatTime(slot)}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {error && (
                      <p className="text-red-500 text-xs font-jakarta mt-2">{error}</p>
                    )}

                    {selectedSlot && (
                      <button
                        onClick={handleBook}
                        disabled={submitting}
                        className="btn-dark w-full justify-center text-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20"/>
                              <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                            Booking...
                          </span>
                        ) : (
                          <>
                            Confirm Booking
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Step 3: Success ──────────────────────────────── */}
        {step === 'success' && (
          <div
            className="card p-8 sm:p-12 max-w-lg w-full text-center space-y-6"
            style={{ border: '6px solid rgba(236,236,236,0.5)', animation: 'blurAnimate 0.6s cubic-bezier(0.01,0.56,1,1) 0.1s both' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
              style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.25)' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2
              className="font-jakarta font-bold text-2xl text-ds-heading"
              style={{ letterSpacing: '-0.03em' }}
            >
              You&apos;re booked!
            </h2>
            <p className="text-ds-muted text-sm leading-relaxed font-jakarta" style={{ letterSpacing: '-0.02em' }}>
              A confirmation has been sent to <span className="text-ds-heading font-medium">{bookingResult?.email || email}</span>.
              <br />We&apos;ll see you on{' '}
              <span className="text-ds-heading font-medium">
                {selectedDate && selectedDate.toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric' })}
              </span>{' '}
              at <span className="text-ds-heading font-medium">{selectedSlot && formatTime(selectedSlot)}</span>.
            </p>
            <a href="/" className="btn-dark inline-flex mt-4 text-sm">
              Back to Home
            </a>
          </div>
        )}
      </main>

      {/* Scrollbar helper */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
