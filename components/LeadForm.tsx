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
      setMsg("Add your name and a valid email so I can send the demo.");
      return;
    }
    const done = () => { setMsg("Sent. I'll email you the 60-second demo within a day."); f.reset(); setBusy(false); };
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
      <h2>Not ready for a call?</h2>
      <p className="hint">Leave your details and I&apos;ll send a 60-second video of NightDesk booking a patient at 10:40 PM.</p>
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field">
        <label htmlFor="note">Clinic name and area <span className="opt">(optional)</span></label>
        <textarea id="note" name="note" placeholder="e.g. Smile Care, Avadi" />
      </div>
      <button className="btn btn-lamp" type="submit" disabled={busy}>Send me the demo</button>
      <div className={err ? "msg err" : "msg"} role="status" aria-live="polite">{msg}</div>
    </form>
  );
}
