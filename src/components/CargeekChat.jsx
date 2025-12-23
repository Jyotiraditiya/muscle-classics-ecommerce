import React, { useEffect, useRef, useState } from 'react';
import { fetchCarInfo, fetchModIdeas } from '../services/cargeekService';

const initialMessages = [
  { role: 'ai', text: 'Hey, I\'m CarGeek. Ask me about budget, models, or storage and I\'ll help you shortlist.' }
];

const quickPrompts = [
  'Show me under $60k',
  'Best 60s muscle picks',
  'Recommend a weekend cruiser',
  'Transport and storage options',
  'Book a viewing this week',
  'Mods for a 69 Camaro'
];

const intentResponses = [
  { match: ['budget', '$', 'price'], reply: 'Based on budget, I can suggest Mustangs, Chevelles, and Chargers in great driver condition. Want me to prioritize originality or mods?' },
  { match: ['muscle', 'power', 'hp'], reply: 'For muscle, consider 69 Charger R/T, 70 Chevelle SS, or a 71 Mustang Mach 1. I can filter by automatic vs 4-speed if you like.' },
  { match: ['cruise', 'weekend', 'sunday'], reply: 'For relaxed weekend cruises, look at a well-sorted Mustang fastback or a resto-mod Camaro with modern brakes and AC.' },
  { match: ['view', 'appointment', 'visit'], reply: 'We can arrange a private viewing at the Detroit showroom—what day works for you?' },
  { match: ['transport', 'shipping', 'deliver', 'storage'], reply: 'We handle enclosed transport and climate storage. Share your zip and I\'ll estimate timeline and cost bands.' },
  { match: ['mod', 'mods', 'upgrade', 'custom', 'resto', 'restomod'], reply: 'Give me the car, current setup, and goal (originality vs performance). Common upgrades: disc brakes + suspension refresh, modern AC, electronic ignition, and a mild cam. Want me to suggest a parts list?' }
];

const buildReply = (text) => {
  const lower = text.toLowerCase();
  const intent = intentResponses.find((i) => i.match.some((m) => lower.includes(m)));
  if (intent) return intent.reply;
  return 'Got it. I can suggest cars by budget, era, purpose, or upgrade path. Share the car (year/model) and whether you want originality or resto-mod.';
};

const CargeekChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text) => {
    const value = text.trim();
    if (!value) return;
    const next = [...messages, { role: 'user', text: value }];
    setMessages(next);
    setInput('');
    setThinking(true);

    (async () => {
      // Heuristic: if message mentions 'mod' or 'upgrade', fetch mod ideas; otherwise try fetching car info.
      const lower = value.toLowerCase();
      try {
        if (/(mod|mods|upgrade|custom|resto|restomod)/.test(lower)) {
          const ideas = await fetchModIdeas(value);
          const lead = buildReply(value);
          setMessages((curr) => [
            ...curr,
            { role: 'ai', text: lead },
            { role: 'ai', text: 'Here are some reference articles:' },
            { role: 'ai', text: JSON.stringify(ideas) }
          ]);
        } else {
          const info = await fetchCarInfo(value);
          if (info) {
            const lead = buildReply(value);
            setMessages((curr) => [
              ...curr,
              { role: 'ai', text: lead },
              { role: 'ai', text: JSON.stringify(info) }
            ]);
          } else {
            const reply = buildReply(value);
            setMessages((curr) => [...curr, { role: 'ai', text: reply }]);
          }
        }
      } catch (e) {
        setMessages((curr) => [...curr, { role: 'ai', text: 'I had trouble fetching references. I can still suggest builds—share your budget and era.' }]);
      } finally {
        setThinking(false);
      }
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleClose = () => {
    setOpen(false);
    setMessages(initialMessages);
    setInput('');
    setThinking(false);
  };

  return (
    <div className={`cargeek ${open ? 'cargeek--open' : ''}`}>
      {!open && (
        <button className="cargeek__fab" onClick={() => setOpen(true)} aria-label="Open CarGeek chat">
          <span className="cargeek__fab-dot" />
          <span className="cargeek__fab-label">Chat with CarGeek</span>
        </button>
      )}

      {open && (
        <div className="cargeek__panel">
          <header className="cargeek__header">
            <div>
              <p className="cargeek__eyebrow">AI Concierge</p>
              <h3>CarGeek</h3>
              <p className="cargeek__sub">Suggestions for cars, viewing, and transport.</p>
            </div>
            <button className="cargeek__close" onClick={handleClose} aria-label="Close CarGeek chat">×</button>
          </header>

          <div className="cargeek__body" ref={scrollRef}>
            {messages.map((m, idx) => {
              const isJson = (() => { try { JSON.parse(m.text); return true; } catch { return false; } })();
              const data = isJson ? JSON.parse(m.text) : null;
              const isInfo = data && data.title && data.url;
              const isIdeas = data && data.items && Array.isArray(data.items);
              return (
                <div key={idx} className={`cargeek__message cargeek__message--${m.role}`}>
                  <span className="cargeek__sender">{m.role === 'ai' ? 'CarGeek' : 'You'}</span>
                  {!isJson && <p>{m.text}</p>}
                  {isInfo && (
                    <div className="cargeek__card">
                      {data.thumbnail && <img src={data.thumbnail} alt={data.title} />}
                      <div className="cargeek__card-body">
                        <strong>{data.title}</strong>
                        {data.description && <em>{data.description}</em>}
                        <p>{data.extract}</p>
                        <a href={data.url} target="_blank" rel="noreferrer">Source: {data.source}</a>
                      </div>
                    </div>
                  )}
                  {isIdeas && (
                    <div className="cargeek__list">
                      {data.items.map((it) => (
                        <a key={it.url} href={it.url} target="_blank" rel="noreferrer" className="cargeek__list-item">
                          <strong>{it.title}</strong>
                          <span>{it.snippet}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {thinking && (
              <div className="cargeek__message cargeek__message--ai">
                <span className="cargeek__sender">CarGeek</span>
                <div className="cargeek__typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>

          <div className="cargeek__quick">
            {quickPrompts.map((prompt) => (
              <button key={prompt} onClick={() => sendMessage(prompt)}>{prompt}</button>
            ))}
          </div>

          <form className="cargeek__input" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask about a car, budget, or viewing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Message CarGeek"
            />
            <button type="submit">Send</button>
          </form>

          <p className="cargeek__disclaimer">CarGeek provides suggestions; confirm availability and pricing with our team.</p>
        </div>
      )}
    </div>
  );
};

export default CargeekChat;
