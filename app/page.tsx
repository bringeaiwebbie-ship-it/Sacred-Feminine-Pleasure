const instagram = "https://www.instagram.com/forwardwegrow/";
const contactEmail = "info@fwg.com";

const experiences = [
  {
    number: "01",
    title: "Move & reconnect",
    category: "YOGA & WELLBEING",
    description:
      "Make room to breathe, soften and come back to yourself. Explore movement and mindful practices rooted in curiosity, not perfection.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
    alt: "A peaceful yoga and meditation practice in warm natural light",
  },
  {
    number: "02",
    title: "Gather & grow",
    category: "RETREATS & COMMUNITY",
    description:
      "Find your people, follow your sense of adventure and make space for the kind of connection that stays with you long after the gathering.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    alt: "Friends gathering outdoors in a sunlit natural setting",
  },
  {
    number: "03",
    title: "Create & express",
    category: "ART & CREATIVITY",
    description:
      "Follow the small spark. Play, make a mess, try something new and let creativity be a way of listening to yourself.",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=85",
    alt: "An artist's colourful creative workspace",
  },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        YOGA · ADVENTURE · ART · COMMUNITY
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Forward We Grow home">
          <span className="wordmark-flower">✳</span>
          <span>forward<br />we grow</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">Our spirit</a>
          <a href="#experiences">Experiences</a>
          <a href="#sarah">Meet Sarah</a>
        </nav>
        <a className="header-cta" href="#connect">Come say hello <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>✳</span> A little space to be more you</p>
          <h1>Come home<br />to your <em>nature.</em></h1>
          <p className="hero-intro">
            For kick-ass humans finding their way back to what feels true.
            Through yoga, adventure, creativity and community, there is room
            here to move, explore, connect and grow.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#experiences">Explore the experiences <Arrow /></a>
            <a className="text-link" href="#story">Get to know us <span>↓</span></a>
          </div>
          <div className="hero-note">
            <span className="note-star">✳</span>
            <span>For the curious, the courageous<br />and the beautifully in-between.</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-image" role="img" aria-label="Sunlit meadow with wildflowers" />
          <div className="image-sticker"><span>grow at<br />your own<br /><em>pace</em></span><b>✳</b></div>
          <p className="image-caption">A life that feels like yours <span>—</span> one little step at a time.</p>
        </div>
        <div className="hero-side-label">FORWARD, ALWAYS · 01 / 04</div>
      </section>

      <section className="manifesto" id="story">
        <div className="manifesto-top"><span>THE HEART OF IT</span><span>✳ &nbsp; ROOTED IN CONNECTION</span></div>
        <p>
          We believe growth isn't about becoming someone else.
          It's about <em>remembering who you are</em> — and giving
          that person a little more room to bloom.
        </p>
        <div className="manifesto-bottom"><span>Less should. More soul.</span><span>Keep growing wild. ↗</span></div>
      </section>

      <section className="experiences section-pad" id="experiences">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>✳</span> Find your way in</p>
            <h2>Many ways to<br /><em>feel more alive.</em></h2>
          </div>
          <p className="section-aside">
            However you arrive, there is space to begin exactly where you are.
            Follow what calls to you.
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.number}>
              <div className="experience-image" style={{ backgroundImage: `url(${item.image})` }}>
                <span className="card-number">{item.number}</span>
              </div>
              <div className="card-meta">{item.category}<span>✳</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="card-link" href={instagram}>Explore this path <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="sarah-section" id="sarah">
        <div className="sarah-image" role="img" aria-label="A woman enjoying a quiet moment in nature" />
        <div className="sarah-copy">
          <p className="eyebrow"><span>✳</span> A human behind the heart</p>
          <h2>Hi, I'm <em>Sarah.</em></h2>
          <p className="sarah-lead">
            Artist, yoga teacher, space-holder, mother — and a human figuring
            it out as she goes.
          </p>
          <p>
            I find magic in the everyday: making things with my hands,
            getting outside, moving my body, being with good people and
            remembering that we don't have to have it all figured out.
          </p>
          <p>
            Forward We Grow grew from that spirit. A place to make room for
            more connection, more curiosity and more of the life that feels
            like your own.
          </p>
          <a className="button button-outline" href={instagram}>Find me on Instagram <Arrow /></a>
          <span className="handwritten">so glad you're here <span>♡</span></span>
        </div>
      </section>

      <section className="closing-quote">
        <span className="quote-flower">✳</span>
        <p>There is no one right way<br />to <em>grow.</em></p>
        <span className="quote-caption">Just your way. At your pace. With your people.</span>
      </section>

      <section className="connect section-pad" id="connect">
        <div>
          <p className="eyebrow"><span>✳</span> Your next little step</p>
          <h2>Something here<br />feel like <em>you?</em></h2>
          <p className="connect-copy">
            Whether you're curious about yoga, dreaming of a gathering,
            interested in a creative collaboration or simply want to say hello,
            we'd love to hear from you.
          </p>
        </div>
        <div className="connect-card">
          <span className="connect-spark">✳</span>
          <p>Good things grow<br />when we <em>connect.</em></p>
          <a className="button button-dark" href={`mailto:${contactEmail}?subject=Hello%20Forward%20We%20Grow`}>Email Forward We Grow <Arrow /></a>
          <small>For enquiries, collaborations and curious humans.<br />
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </small>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#top">
          <span className="wordmark-flower">✳</span>
          <span>forward<br />we grow</span>
        </a>
        <p>Kick-ass humans. Growing together. 🌿</p>
        <div className="footer-links">
          <a href={instagram}>Instagram <Arrow /></a>
          <a href={`mailto:${contactEmail}`}>Email <Arrow /></a>
          <a href="#top">Back to top ↑</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Forward We Grow</span>
      </footer>
    </main>
  );
}