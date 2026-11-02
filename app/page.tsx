import BookLink from "@/components/BookLink";
import LeadForm from "@/components/LeadForm";
import MissedShots from "@/components/MissedShots";

const timeline = [
  {
    when: "Day 1",
    title: "Kickoff",
    you: "Send product photos, your Instagram handle and three brands you admire.",
    youTime: "10 min",
    us: "Lock your voice, colours and hooks so every reel sounds like your brand.",
  },
  {
    when: "Day 7",
    title: "First reels live",
    you: "Approve your first 3 reels in one go. Nothing posts without your yes.",
    youTime: "15 min",
    us: "Your product in real scenes, ingredient stories and captions, ready to post.",
  },
  {
    when: "Every month",
    title: "12 new shots",
    you: "Read a one-page report on what your audience actually watched.",
    youTime: "5 min",
    us: "Build the next 12 reels around what performed, so every batch hits harder.",
  },
];

const outcomes = [
  { title: "Reach people who don't follow you yet", body: "Every reel is a shot at the Explore feed. Small accounts break out on video, not on follower count." },
  { title: "A feed that sells while you run the brand", body: "Your product shows up every few days, in your voice, without you filming at night." },
  { title: "Know what your customers actually watch", body: "A monthly reach report shows which reels landed, so every batch gets sharper than the last." },
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

      <section className="block how" id="how">
        <div className="wrap">
          <div className="how-head">
            <h2>From product photos to posted reels in 7 days.</h2>
            <p className="how-sub">You run the brand. I make the reels. Here&apos;s exactly what each of us does.</p>
          </div>
          <ol className="timeline">
            {timeline.map((t) => (
              <li className="tl-step" key={t.when}>
                <div className="tl-marker"><span>{t.when}</span></div>
                <div className="tl-card">
                  <h3>{t.title}</h3>
                  <div className="tl-row tl-you">
                    <span className="tl-who">You</span>
                    <p>{t.you}</p>
                    <span className="tl-time">{t.youTime}</span>
                  </div>
                  <div className="tl-row tl-us">
                    <span className="tl-who">Me</span>
                    <p>{t.us}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="how-total">
            <b>Your part: about 30 minutes a month.</b>
            <span>No shoot, no filming at night, no agency briefs.</span>
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
