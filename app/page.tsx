import BookLink from "@/components/BookLink";
import LeadForm from "@/components/LeadForm";
import ChatDemo from "@/components/ChatDemo";

const steps = [
  { when: "Day 1 to 2", title: "Set up", body: "One call to capture your services, timings, doctors and the questions patients ask most." },
  { when: "Day 3 to 5", title: "Build", body: "I connect it to your clinic's WhatsApp and Google Calendar, in English, Tamil or Tanglish." },
  { when: "Day 6 to 7", title: "Go live", body: "You test it, approve every answer, and switch it on." },
];

const pillars = [
  {
    title: "Every message answered",
    body: "In under a minute, at 10 PM or on a Sunday. Timings, location, treatments, available slots.",
  },
  {
    title: "Fewer empty chairs",
    body: "Bookings land in your calendar, with reminders 48 hours and 2 hours before, so patients actually turn up.",
  },
  {
    title: "Patients who come back",
    body: "Every patient is asked for a Google review, and recalled for their 6-month check-up. Unhappy replies reach you first.",
  },
];

const journey = [
  { when: "Any time", what: "A patient messages your clinic on WhatsApp." },
  { when: "Under a minute", what: "NightDesk replies with timings, location, treatments and open slots." },
  { when: "Same chat", what: "The slot is booked into your calendar, with the right doctor." },
  { when: "48 hours and 2 hours before", what: "Reminders go out, with directions and parking." },
  { when: "After the visit", what: "Every patient is asked for a Google review. Anyone unhappy is flagged to you the same day." },
  { when: "6 months later", what: "A check-up reminder, and the slot is booked if they say yes." },
  { when: "Every Monday", what: "A short report on your WhatsApp: enquiries, bookings, no-shows, reviews, recalls." },
];

const proof = [
  { n: "3 years", label: "building enterprise workflow software: forms, approvals and notifications that run without anyone chasing them." },
  { n: "7 sites", label: "built and launched for one founder's consumer brands, including a live store in English and Hindi." },
  { n: "1 builder", label: "sets it up, maintains it and picks up your call. No agency queue, and I live in Avadi." },
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-row">
          <a className="mark" href="#top">
            <span className="lamp" aria-hidden="true" />
            NightDesk
          </a>
          <BookLink className="btn btn-quiet">Book a call</BookLink>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Your front desk closes at 8. Your patients&apos; WhatsApp messages don&apos;t.</h1>
            <p className="sub">
              NightDesk is an AI assistant on your clinic&apos;s WhatsApp. It replies to every enquiry in under a minute, books
              the slot and sends the reminders. After the visit, it asks for a review and brings patients back at 6 months.
            </p>
            <div className="actions">
              <BookLink className="btn btn-lamp">Book a call</BookLink>
              <span className="by">Built and run by Easwar, Avadi, Chennai</span>
            </div>
          </div>
          <div className="hero-form">
            <LeadForm />
          </div>
          <div className="hero-demo">
            <ChatDemo />
          </div>
        </div>
      </header>

      <section className="pain">
        <div className="wrap">
          <p className="pain-lead">I checked 29 dental clinics around Avadi, Ambattur, Mogappair and Anna Nagar on Google Maps.</p>
          <div className="stat-row">
            <div className="stat">
              <b>22 of 29</b>
              <span>close by 9 PM on weekdays.</span>
            </div>
            <div className="stat">
              <b>7 of 29</b>
              <span>are shut all of Sunday.</span>
            </div>
          </div>
          <p className="pain-close">After that, the messages keep coming. Whoever replies first gets the booking.</p>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="wrap journey-grid">
          <div className="journey-intro">
            <h2>From the first message to the 6-month check-up</h2>
            <p>Your desk runs the day. NightDesk runs everything between visits. Anything medical, urgent or unclear goes straight to your staff.</p>
          </div>
          <ol className="journey">
            {journey.map((j) => (
              <li key={j.when}>
                <span className="journey-when">{j.when}</span>
                <span className="journey-what">{j.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="how">
        <div className="wrap">
          <h2>Live on your number in 7 days</h2>
          <ol className="card-row">
            {steps.map((s) => (
              <li className="card step" key={s.title}>
                <span className="tag">{s.when}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2>What your clinic gets</h2>
          <div className="card-row">
            {pillars.map((p) => (
              <article className="card pillar" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <h2>Built by someone who makes software that runs on its own.</h2>
          <div className="stat-row stat-row-3">
            {proof.map((p) => (
              <div className="stat stat-dark" key={p.n}>
                <b>{p.n}</b>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
          <p className="proof-note">No clinic results to show yet. Yours could be the first, on a 14-day pilot.</p>
        </div>
      </section>

      <section className="closing">
        <div className="wrap closing-inner">
          <h2>The next message arrives tonight.</h2>
          <div className="actions">
            <BookLink className="btn btn-lamp">Book a call</BookLink>
            <a className="text-link" href="#lead">Or leave your details</a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">NightDesk, Avadi, Chennai. Built by Easwar.</div>
      </footer>
    </>
  );
}
