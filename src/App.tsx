import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Compass,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  MoveUpRight,
  Music2,
  Palette,
  Phone,
  Play,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';

const logo = '/images/472391677_930166179311644_8869613940341016846_n.jpg';
const whatsappBase = 'https://wa.me/919657033666';
const mapsUrl = 'https://maps.google.com/maps/search/12%2C%20New%20Cantonment%20Rd%2C%20near%20P.O%2C%20Hathibarkala%2C%20Dehradun%2C%20Uttarakhand%20248001%2C%20India/@30.3442,78.0479,17z?hl=en';

const images = {
  painting: 'https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  watercolor: 'https://images.pexels.com/photos/8613054/pexels-photo-8613054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  creative: 'https://images.pexels.com/photos/8612993/pexels-photo-8612993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  outdoors: 'https://images.pexels.com/photos/8613309/pexels-photo-8613309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  reading: 'https://images.pexels.com/photos/8922396/pexels-photo-8922396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sandbox: 'https://images.pexels.com/photos/12932388/pexels-photo-12932388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const navLinks = [
  ['About us', '#about'],
  ['Learning & activities', '#learning'],
  ['Our environment', '#environment'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
];

const activities = [
  { number: '01', title: 'Creative art & craft', text: 'Making, shaping, painting and wondering — with room for every idea to take form.', icon: Palette, tone: 'yellow' },
  { number: '02', title: 'Play-based learning', text: 'Play is where questions begin, friendships grow and confidence finds its voice.', icon: Sparkles, tone: 'pink' },
  { number: '03', title: 'Music, movement & expression', text: 'Stories, rhythm and movement help little learners express their whole selves.', icon: Music2, tone: 'blue' },
  { number: '04', title: 'Discovery & exploration', text: 'Hands-on experiences invite children to notice, investigate and connect.', icon: Compass, tone: 'green' },
];

const faqs = [
  ['Where is The New Infinity Academy located?', 'We are at 12, New Cantt Road, near P.O., Hathibarkala, Dehradun, Uttarakhand 248001, India. You can open directions in Google Maps or message us on WhatsApp.'],
  ['How can I contact the academy?', 'For questions and enquiries, call or WhatsApp us at +91 96570 33666. WhatsApp is the quickest way to start a conversation.'],
  ['What learning activities are available?', 'Our learning environment is shaped around creative art and craft, play-based learning, music and movement, language, indoor and outdoor activities, and hands-on discovery.'],
  ['How can I enquire about admissions?', 'Send us a WhatsApp message and our team can share the current admission information with you directly.'],
  ['Can I arrange a visit?', 'Please WhatsApp us to ask about arranging a visit. We will help you with the latest details and availability.'],
];

function whatsappLink(message: string): string {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="The New Infinity Academy home">
      <img src={logo} alt="The New Infinity Academy logo" />
      <span><strong>THE NEW</strong><em>INFINITY</em><strong>ACADEMY</strong></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <Logo />
          <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Main navigation">
            {navLinks.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </nav>
          <a className="nav-cta" href={whatsappLink('Hello, I would like to know more about The New Infinity Academy.')} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> Enquire on WhatsApp
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A joyful beginning in Dehradun</p>
            <h1 id="hero-title">Little minds.<br /><span>Infinite</span> possibilities.</h1>
            <p className="hero-intro">A joyful place to explore, discover, create and grow. Every little step opens up a world of possibilities.</p>
            <div className="hero-actions">
              <a className="button button--dark" href="#about">Explore our academy <ArrowUpRight size={18} /></a>
              <a className="button button--light" href={whatsappLink('Hello, I would like to know more about The New Infinity Academy and its learning programs.')} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Talk to us</a>
            </div>
            <div className="hero-note"><span className="scribble">✳</span><span>Curiosity<br />starts here.</span></div>
          </div>
          <div className="hero-scene" aria-label="Playful illustration of learning blocks and books" role="img">
            <div className="scene-sun" />
            <div className="scene-cloud cloud-one" /><div className="scene-cloud cloud-two" />
            <div className="infinity-loop infinity-loop--one" /><div className="infinity-loop infinity-loop--two" />
            <div className="scene-floor" />
            <div className="book book--green"><span>ABC</span></div>
            <div className="book book--pink"><span>123</span></div>
            <div className="block block--yellow">A</div>
            <div className="block block--blue">B</div>
            <div className="block block--orange">C</div>
            <div className="pencil"><i /></div>
            <div className="scene-spark spark-one">✦</div><div className="scene-spark spark-two">✦</div>
            <div className="scene-caption"><span>learn</span><span>with joy</span></div>
          </div>
        </section>

        <section className="marquee" aria-label="Academy values">
          <div className="marquee-track"><span>Curiosity</span><i>✦</i><span>Creativity</span><i>✦</i><span>Confidence</span><i>✦</i><span>Kindness</span><i>✦</i><span>Curiosity</span><i>✦</i><span>Creativity</span></div>
        </section>

        <section id="about" className="about section-pad">
          <div className="section-kicker">01 / Our little universe</div>
          <div className="about-grid">
            <div className="about-heading"><h2>Where every little mind <span>can shine.</span></h2><div className="sun-stamp"><Sun size={24} /><small>grow<br />gently</small></div></div>
            <div className="about-copy"><p className="lead">At The New Infinity Academy, learning begins with a feeling: the feeling that it is safe to ask, try, make mistakes and try again.</p><p>We create space for children to discover their own way of seeing the world — through play, imagination, movement and meaningful everyday experiences.</p><a className="text-link" href={whatsappLink('Hello, I would like to learn more about the learning environment at The New Infinity Academy.')} target="_blank" rel="noreferrer">Start a conversation <MoveUpRight size={15} /></a></div>
          </div>
          <div className="about-image-wrap"><img src={images.painting} alt="Children exploring a painting activity with a teacher" loading="lazy" /><div className="image-tag">wonder is<br /><b>everywhere</b></div><div className="image-line" /></div>
        </section>

        <section id="learning" className="learning section-pad">
          <div className="section-heading-row"><div><div className="section-kicker">02 / Ways to wonder</div><h2>Learning looks <em>different</em><br />for every child.</h2></div><p>We make room for different rhythms, different questions and all the beautiful ways children learn.</p></div>
          <div className="activity-list">{activities.map(({ number, title, text, icon: Icon, tone }) => <article className={`activity activity--${tone}`} key={title}><span className="activity-number">{number}</span><div className="activity-icon"><Icon size={26} strokeWidth={1.6} /></div><div><h3>{title}</h3><p>{text}</p></div><ChevronRight className="activity-arrow" size={22} /></article>)}</div>
          <a className="button button--outline" href={whatsappLink('Hello, I would like to know more about the learning activities at The New Infinity Academy.')} target="_blank" rel="noreferrer">Ask about activities <MessageCircle size={17} /></a>
        </section>

        <section id="environment" className="environment section-pad">
          <div className="environment-visual"><img src={images.reading} alt="Teacher and children reading together outdoors" loading="lazy" /><div className="visual-badge"><Leaf size={20} /><span>grow<br /><b>together</b></span></div></div>
          <div className="environment-copy"><div className="section-kicker">03 / The environment</div><h2>A soft place to land.<br /><span>A bright place to grow.</span></h2><p>Children learn best when they feel seen. Our environment is designed to feel welcoming, thoughtful and full of invitations to explore.</p><ul><li><span>01</span> Warm, caring interactions</li><li><span>02</span> Space for active discovery</li><li><span>03</span> Encouragement for every voice</li></ul><a className="text-link" href="#gallery">See academy life <MoveUpRight size={15} /></a></div>
        </section>

        <section id="gallery" className="gallery section-pad"><div className="section-kicker">04 / A glimpse into academy life</div><div className="gallery-heading"><h2>Small moments.<br /><em>Big wonder.</em></h2><p>A collection of the kinds of moments that make learning feel like an adventure.</p></div><div className="gallery-grid"><button className="gallery-image gallery-image--large" type="button" onClick={() => setLightbox(images.watercolor)}><img src={images.watercolor} alt="Children painting together in a creative classroom" loading="lazy" /><span>make room for imagination <ArrowUpRight size={16} /></span></button><button className="gallery-image gallery-image--tall" type="button" onClick={() => setLightbox(images.outdoors)}><img src={images.outdoors} alt="Children playing together outdoors" loading="lazy" /><span>learn in every season <ArrowUpRight size={16} /></span></button><button className="gallery-image gallery-image--small" type="button" onClick={() => setLightbox(images.sandbox)}><img src={images.sandbox} alt="Children engaged in imaginative outdoor play" loading="lazy" /><span>follow the question <ArrowUpRight size={16} /></span></button></div></section>

        <section className="faq section-pad"><div className="faq-intro"><div className="section-kicker">05 / Parent information</div><h2>Good questions<br /><em>belong here.</em></h2><p>We believe in clear, honest conversations. If you are curious about anything, our team is happy to help.</p><a className="button button--dark" href={whatsappLink('Hello, I have a question about The New Infinity Academy.')} target="_blank" rel="noreferrer">Ask us on WhatsApp <MessageCircle size={17} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

        <section className="final-cta section-pad"><div className="final-cta-art"><div className="final-star">✦</div><div className="final-orbit" /><div className="final-orbit final-orbit--two" /><div className="final-block">∞</div></div><div><div className="section-kicker">Every journey begins small</div><h2>Let’s make every little <em>beginning</em> count.</h2><p>Connect with The New Infinity Academy to learn more about our environment, activities and admission process.</p><a className="button button--yellow" href={whatsappLink('Hello, I would like to know more about The New Infinity Academy and the admission process.')} target="_blank" rel="noreferrer">Chat with us on WhatsApp <MessageCircle size={18} /></a></div></section>
      </main>

      <footer id="contact" className="site-footer"><div className="footer-top"><div><Logo compact /><p>A joyful beginning for curious, creative and confident little minds.</p><a className="instagram-link" href="https://www.instagram.com/thenewinfinityacademy/" target="_blank" rel="noreferrer"><Instagram size={16} /> Follow along on Instagram</a></div><div className="footer-col"><h3>Explore</h3>{navLinks.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div className="footer-col footer-contact"><h3>Come say hello</h3><a href="tel:+919657033666"><Phone size={15} /> +91 96570 33666</a><a href={whatsappLink('Hello, I would like to know more about The New Infinity Academy.')} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp us</a><a href={mapsUrl} target="_blank" rel="noreferrer"><span className="pin">⌖</span> 12, New Cantt Road, near P.O.,<br /> Hathibarkala, Dehradun 248001</a></div></div><div className="footer-bottom"><span>© 2026 The New Infinity Academy</span><a href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14} /></a><span>Made for little beginnings.</span></div></footer>

      <a className="floating-whatsapp" href={whatsappLink('Hello, I would like to know more about The New Infinity Academy.')} target="_blank" rel="noreferrer" aria-label="Chat with The New Infinity Academy on WhatsApp"><MessageCircle size={22} /></a>
      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button type="button" aria-label="Close image" onClick={() => setLightbox(null)}><X size={24} /></button><img src={lightbox} alt="Enlarged academy moment" onClick={(event) => event.stopPropagation()} /></div>}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Preschool', name: 'The New Infinity Academy', telephone: '+91 96570 33666', address: { '@type': 'PostalAddress', streetAddress: '12, New Cantt Road, near P.O., Hathibarkala', addressLocality: 'Dehradun', addressRegion: 'Uttarakhand', postalCode: '248001', addressCountry: 'IN' }, sameAs: ['https://www.instagram.com/thenewinfinityacademy/'] }) }} />
    </div>
  );
}

export default App;
