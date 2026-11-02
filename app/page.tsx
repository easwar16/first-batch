import BookLink from "@/components/BookLink";
import LeadForm from "@/components/LeadForm";
import MissedShots from "@/components/MissedShots";

const steps = [
  { n: 1, title: "Send your photos", body: "Product shots, your handle, three brands you admire." },
  { n: 2, title: "Approve the batch", body: "Reels in your voice, ready in 7 days. Nothing posts without your yes." },
  { n: 3, title: "Repeat every month", body: "A new batch on a fixed calendar, shaped by what performed." },
];

const pillars = [
  { title: "A voice that sounds like you", body: "Colours, hooks and caption style locked before the first reel." },
  { title: "A full batch of reels", body: "Your product in real scenes, ingredient stories, captions ready to post." },
  { title: "A one-page reach report", body: "What your audience watched, so next month leans into it." },
];

const reels = ["Jar opens on a kitchen counter", "Ingredients, one by one", "Morning ritual, 7 AM", "The first sip"];

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
            <div className="reels" aria-hidden="true">
              {reels.map((r) => <div className="reel" key={r}><span>{r}</span></div>)}
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
          <div>
            <h2>One reel. 48 times the account&apos;s size.</h2>
            <p>An AI reel I made for a pre-launch beverage brand reached 10,000 views on an account with 208 followers. Reach follows the video, not the follower count.</p>
            <div className="facts">
              <span className="tag">7 sites built for one consumer brand group</span>
              <span className="tag">Live D2C store in English and Hindi</span>
              <span className="tag">Every reel AI-made, no shoot</span>
            </div>
          </div>
          <div className="meter" role="img" aria-label="208 followers compared with 10,000 views">
            <div className="bar small"><div className="label">Followers <b>208</b></div><div className="track"><div className="fill" /></div></div>
            <div className="bar big"><div className="label">Views on one reel <b>10,000</b></div><div className="track"><div className="fill" /></div></div>
            <p className="note">10,000 ÷ 208 = 48×. Same account. Brand kept private.</p>
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
