"use client";
import { useEffect, useState } from "react";

type Msg = { from: "patient" | "desk"; time: string; text: string };

const thread: Msg[] = [
  { from: "patient", time: "10:41 PM", text: "Hi, are you open tomorrow? I need a cleaning" },
  {
    from: "desk",
    time: "10:41 PM",
    text: "Hi! Yes, we're open 9:30 AM to 9 PM. A cleaning takes about 30 minutes. I have 11:00 AM or 6:30 PM free tomorrow. Which suits you?",
  },
  { from: "patient", time: "10:42 PM", text: "6:30 is good" },
  {
    from: "desk",
    time: "10:42 PM",
    text: "Done. You're booked for tomorrow at 6:30 PM with Dr. Priya. I'll remind you at 4 PM. Reply here if anything changes.",
  },
];

export default function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(thread.length);
      return;
    }
    const timers: number[] = [];
    let t = 600;
    thread.forEach((m, i) => {
      if (m.from === "desk") {
        timers.push(window.setTimeout(() => setTyping(true), t));
        t += 1100;
      }
      timers.push(
        window.setTimeout(() => {
          setTyping(false);
          setShown(i + 1);
        }, t),
      );
      t += m.from === "desk" ? 900 : 700;
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <figure className="chat" aria-label="A demo WhatsApp conversation with a fictional clinic">
      <div className="chat-head">
        <span className="chat-avatar" aria-hidden="true">AS</span>
        <span>
          <b>Avadi Smile Dental</b>
          <small>Demo clinic</small>
        </span>
      </div>
      <div className="chat-body">
        <p className="chat-notice">Front desk closed at 8:00 PM</p>
        {thread.slice(0, shown).map((m, i) => (
          <div className={`bubble bubble-${m.from}`} key={i}>
            <span>{m.text}</span>
            <time>{m.time}</time>
          </div>
        ))}
        {typing && (
          <div className="bubble bubble-desk bubble-typing" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
      <figcaption>A demo conversation. Every answer comes from what the clinic approves.</figcaption>
    </figure>
  );
}
