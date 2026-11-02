"use client";
import { useState, type FormEvent } from "react";
import { LEAD_ENDPOINT } from "./config";

export default function LeadForm() {
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = String(data.get("note") ?? "");
    setErr(false);
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      setErr(true);
      setMsg("Add your name and a valid email to get your reel ideas.");
      return;
    }
    const done = () => { setMsg("Sent. Your 3 reel ideas arrive within a day."); f.reset(); setBusy(false); };
    if (!LEAD_ENDPOINT) { done(); return; }
    setBusy(true);
    try {
      const r = await fetch(LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, note }) });
      if (!r.ok) throw new Error();
      done();
    } catch {
      setBusy(false);
      setErr(true);
      setMsg("That didn't send. Try again, or email me directly.");
    }
  }

  return (
    <form className="card lead" id="lead" noValidate onSubmit={onSubmit}>
      <h2>Get 3 reel ideas for your product</h2>
      <p className="hint">Tell me your brand. I&apos;ll reply within a day with three reel ideas built for it.</p>
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field">
        <label htmlFor="note">Brand or Instagram handle <span style={{ fontWeight: 400, color: "var(--muted)" }}>(optional)</span></label>
        <textarea id="note" name="note" placeholder="@yourbrand" />
      </div>
      <button className="btn sun" type="submit" disabled={busy}>Send me 3 reel ideas</button>
      <div className={err ? "msg err" : "msg"} role="status" aria-live="polite">{msg}</div>
    </form>
  );
}
