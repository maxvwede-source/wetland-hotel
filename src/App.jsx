import { useState, Suspense } from 'react';
import Antigravity from './components/Antigravity';
import SplashCursor from './components/SplashCursor';
import RippleDistortion from './components/RippleDistortion';
import './components/RippleDistortion.css';
import ScrollExpand from './components/ScrollExpand';

const ROOMS = [
  { name: 'Deluxe Suite', price: '$280', desc: 'Spacious suite with wetland views, king bed, and private balcony.', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Garden Room', price: '$180', desc: 'Cozy room overlooking lush gardens with modern amenities.', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop' },
  { name: 'Waterfront Villa', price: '$450', desc: 'Private villa on the water\'s edge with infinity pool and butler service.', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Presidential Suite', price: '$720', desc: 'Ultimate luxury with panoramic views, private dining, and spa access.', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop' }
];

const AMENITIES = [
  { icon: '\u{1F3CA}', name: 'Infinity Pool', desc: 'Heated pool overlooking the wetlands' },
  { icon: '\u{1F6C1}', name: 'Spa & Wellness', desc: 'Full-service spa with natural treatments' },
  { icon: '\u{1F37D}', name: 'Fine Dining', desc: 'Farm-to-table restaurant with local cuisine' },
  { icon: '\u{1F3E2}', name: 'Conference Hall', desc: 'State-of-the-art meeting facilities' },
  { icon: '\u{1F6B6}', name: 'Nature Trails', desc: 'Guided walks through protected wetlands' },
  { icon: '\u{1F37F}', name: 'Sunset Bar', desc: 'Cocktails with panoramic sunset views' }
];

const GALLERY = [
  { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop', caption: 'Resort Exterior' },
  { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop', caption: 'Spa Retreat' },
  { url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop', caption: 'Pool View' },
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', caption: 'Fine Dining' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', caption: 'Private Beach' },
  { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3416&auto=format&fit=crop', caption: 'Wetland Views' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)', backdropFilter: 'blur(4px)' }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>
        Wetland Hotel
      </div>
      <div style={{ display: 'flex', gap: 32, fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
        <a href="#rooms" style={{ color: 'inherit', textDecoration: 'none' }}>Rooms</a>
        <a href="#amenities" style={{ color: 'inherit', textDecoration: 'none' }}>Amenities</a>
        <a href="#gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</a>
        <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Suspense fallback={null}>
          <Antigravity count={250} color="#d4a574" autoAnimate particleSize={1.5} ringRadius={12} magnetRadius={12} rotationSpeed={0.3} />
        </Suspense>
      </div>
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a574', marginBottom: 16 }}>Welcome to</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 120px)', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.03em', lineHeight: 1 }}>Wetland Hotel</h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 2vw, 18px)', color: 'rgba(255,255,255,0.6)', marginTop: 16, maxWidth: 500, lineHeight: 1.6 }}>Where luxury meets nature. Escape to tranquility in the heart of the wetlands.</p>
        <a href="#rooms" style={{ marginTop: 40, padding: '14px 36px', background: '#d4a574', color: '#000', fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 8, transition: 'all 0.3s' }}>Book Your Stay</a>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%', zIndex: 10, textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', animation: 'pulse 2s ease-in-out infinite' }}>Scroll to explore</p>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:0.8} }`}</style>
    </section>
  );
}

function ScrollSection() {
  return (
    <section style={{ position: 'relative', background: '#0a0a0a' }}>
      <ScrollExpand
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
        title="Immerse Yourself in Nature"
        scrollHint="Scroll down"
        useWindowScroll
        mediaZoom={1.3}
        startRadius={32}
        overlayScrim={0.5}
      >
        <div style={{ color: '#fff', fontFamily: "'Inter', sans-serif" }}>
          <p style={{ fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a574', marginBottom: 12 }}>Our Story</p>
          <p style={{ fontSize: 16, maxWidth: 500, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
            Nestled in pristine wetlands, our resort offers an unparalleled blend of luxury and ecological harmony. Every moment here is designed to reconnect you with nature.
          </p>
        </div>
      </ScrollExpand>
    </section>
  );
}

function RoomsSection() {
  return (
    <section id="rooms" style={{ padding: '100px 32px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a574', marginBottom: 8, textAlign: 'center' }}>Accommodations</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 60 }}>Our Rooms & Suites</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {ROOMS.map((room, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', transition: 'transform 0.3s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                <RippleDistortion src={room.img} style={{ width: '100%', height: '100%' }} strength={0.15} rings={3} brushSize={120} grayscale={false} tint="#d4a574" tintAmount={0.05} />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#fff', margin: 0 }}>{room.name}</h3>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 600, color: '#d4a574' }}>{room.price}<span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>/night</span></span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  return (
    <section id="amenities" style={{ padding: '100px 32px', background: 'linear-gradient(180deg, #0a0a0a 0%, #111 100%)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a574', marginBottom: 8, textAlign: 'center' }}>Experience</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 60 }}>Hotel Amenities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          {AMENITIES.map((a, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 24, background: 'rgba(255,255,255,0.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: 32 }}>{a.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{a.name}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" style={{ padding: '100px 32px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a574', marginBottom: 8, textAlign: 'center' }}>Gallery</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 60 }}>Visual Journey</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {GALLERY.map((g, i) => (
            <div key={i} style={{ position: 'relative', height: 300, borderRadius: 12, overflow: 'hidden', cursor: 'pointer' }}>
              <RippleDistortion src={g.url} style={{ width: '100%', height: '100%' }} strength={0.2} rings={4} brushSize={150} grayscale={false} tint="#d4a574" tintAmount={0.08} glint={0.5} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#fff', margin: 0, fontWeight: 500 }}>{g.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ padding: '100px 32px', background: 'linear-gradient(180deg, #0a0a0a, #111)' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a574', marginBottom: 8 }}>Reservations</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Book Your Escape</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 40 }}>Ready to experience the Wetland Hotel? Contact us directly or book online for the best rates.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input placeholder="Full Name" style={inputStyle} />
          <input placeholder="Email Address" type="email" style={inputStyle} />
          <div style={{ display: 'flex', gap: 16 }}>
            <input placeholder="Check-in" type="date" style={inputStyle} />
            <input placeholder="Check-out" type="date" style={inputStyle} />
          </div>
          <select style={{ ...inputStyle, appearance: 'none' }}>
            <option value="">Select Room Type</option>
            {ROOMS.map((r, i) => <option key={i} value={r.name}>{r.name} — {r.price}/night</option>)}
          </select>
          <button style={{ padding: '16px 32px', background: '#d4a574', color: '#000', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', border: 'none', borderRadius: 8, cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => e.target.style.background = '#c4956a'}
            onMouseLeave={e => e.target.style.background = '#d4a574'}>
            Request Reservation
          </button>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: '14px 18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8, color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none',
  width: '100%', boxSizing: 'border-box'
};

function Footer() {
  return (
    <footer style={{ padding: '40px 32px', borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0a0a0a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Wetland Hotel</span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>&copy; 2026 Wetland Hotel. All rights reserved.</span>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', overflowX: 'hidden', background: '#0a0a0a', color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      <SplashCursor SPLAT_FORCE={4000} RAINBOW_MODE={false} COLOR="#d4a574" SHADING={true} CURL={2} />
      <Navbar />
      <Hero />
      <ScrollSection />
      <RoomsSection />
      <AmenitiesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
