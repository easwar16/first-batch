import BookLink from "@/components/BookLink";
import LeadForm from "@/components/LeadForm";
import MissedShots from "@/components/MissedShots";

const steps = [
  { n: 1, title: "Send your photos", body: "Product shots, your handle, three brands you admire." },
  { n: 2, title: "Approve the batch", body: "Reels in your voice, ready in 7 days. Nothing posts without your yes." },
  { n: 3, title: "Repeat every month", body: "A new batch on a fixed calendar, shaped by what performed." },
];

const outcomes = [
  { title: "Reach people who don't follow you yet", body: "Every reel is a shot at the Explore feed. Small accounts break out on video, not on follower count." },
  { title: "A feed that sells while you run the brand", body: "Your product shows up every few days, in your voice, without you filming at night." },
  { title: "Know what your customers actually watch", body: "A monthly reach report shows which reels landed, so every batch gets sharper than the last." },
];

const pillars = [
  { title: "A voice that sounds like you", body: "Colours, hooks and caption style locked before the first reel." },
  { title: "A full batch of reels", body: "Your product in real scenes, ingredient stories, captions ready to post." },
  { title: "A one-page reach report", body: "What your audience watched, so next month leans into it." },
];

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap">
          <a className="brand" href="#top"><i aria-hidden="true" />Scrollstop</a>
          <BookLink>Book a call</BookLink>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <div>
            <span className="tag">For food, beverage and wellness brands</span>
            <h1>144 shots a year at reach your followers can&apos;t buy.</h1>
            <p className="sub">12 AI product reels a month, made from the photos you already have. Your first 3 are ready in 7 days.</p>
            <div className="actions">
              <BookLink>Book a 15-minute call</BookLink>
              <a className="btn ghost" href="#how">See how it works</a>
            </div>
            <div className="hero-proof">
              <b>48×</b>
              <span>One AI reel I made reached 10,000 views on an account with 208 followers.</span>
            </div>
          </div>
          <LeadForm />
        </div>
      </header>

      <section className="block calc-band">
        <div className="wrap calc">
          <div>
            <h2>Count your missed shots.</h2>
            <p className="calc-sub">Every reel is a shot at reach beyond your follower count. Here&apos;s how many you&apos;re not taking.</p>
          </div>
          <MissedShots />
        </div>
      </section>

      <section className="block" id="how">
        <div className="wrap">
          <h2>Three steps to your first batch.</h2>
          <div className="grid3">
            {steps.map((s) => (
              <div className="card step" key={s.n}><div className="n">{s.n}</div><h3>{s.title}</h3><p>{s.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="block what">
        <div className="wrap">
          <h2>12 shots, every month.</h2>
          <div className="grid3">
            {pillars.map((p) => (
              <div className="card pillar" key={p.title}><h3>{p.title}</h3><p>{p.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="block proof">
        <div className="wrap">
          <h2>Your follower count is not your ceiling.</h2>
          <p className="proof-sub">Instagram shows a good reel to people who don&apos;t follow you yet. That&apos;s where your next customers are. Here&apos;s what 12 shots a month does for your brand.</p>
          <div className="grid3 outcomes">
            {outcomes.map((o) => (
              <div className="outcome" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
          <div className="proof-strip">
            <div className="proof-num"><b>48×</b><span>reach on one reel</span></div>
            <div className="proof-copy">
              <p>The proof: an AI reel I made for a pre-launch beverage brand reached <b>10,000 views</b> on an account with <b>208 followers</b>. No shoot, no ad spend, just their product photos.</p>
              <div className="meter" role="img" aria-label="208 followers compared with 10,000 views">
                <div className="bar small"><div className="label">Followers <b>208</b></div><div className="track"><div className="fill" /></div></div>
                <div className="bar big"><div className="label">Views <b>10,000</b></div><div className="track"><div className="fill" /></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block close">
        <div className="wrap">
          <h2>Small accounts don&apos;t have a reach problem. They have a shots problem.</h2>
          <p>Fifteen minutes, evenings work. Or leave your details and get three reel ideas first.</p>
          <div className="actions">
            <BookLink>Book a 15-minute call</BookLink>
            <a className="btn ghost" href="#lead">Get 3 reel ideas</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap"><span>Scrollstop, Easwar H, Chennai</span><span>AI product reels for D2C brands</span></div>
      </footer>
    </>
  );
}
