"use client";
import { useState } from "react";

const TARGET = 12;
const clamp = (n: number) => Math.max(0, Math.min(TARGET, Number.isFinite(n) ? n : 0));

export default function MissedShots() {
  const [posted, setPosted] = useState(2);
  const missed = TARGET - posted;
  return (
    <div className="card calc-card">
      <label htmlFor="posted">Reels you posted last month</label>
      <div className="stepper">
        <button type="button" aria-label="One fewer" onClick={() => setPosted((p) => clamp(p - 1))}>&minus;</button>
        <input id="posted" type="number" min={0} max={TARGET} inputMode="numeric" value={posted}
          onChange={(e) => setPosted(clamp(parseInt(e.target.value, 10)))} />
        <button type="button" aria-label="One more" onClick={() => setPosted((p) => clamp(p + 1))}>+</button>
      </div>
      <div className="calc-out" aria-live="polite">
        <div><b>{missed}</b><span>missed shots a month</span></div>
        <div><b>{missed * 12}</b><span>missed shots a year</span></div>
      </div>
      <p className="calc-note">Measured against {TARGET} reels a month.</p>
    </div>
  );
}
