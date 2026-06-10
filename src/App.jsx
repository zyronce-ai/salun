import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Hair Care',
    description: 'Precision cuts, luminous color, and event-ready styling tailored to your features.',
    items: [
      ['Signature Cut & Finish', '₹1,499'],
      ['Luxury Blowout & Style', '₹999'],
      ['Global Color / Highlights', '₹3,999+'],
    ],
  },
  {
    title: 'Skin & Facial',
    description: 'Restorative facials and skin rituals using gentle, glow-focused professional care.',
    items: [
      ['Radiance Clean-up', '₹1,299'],
      ['Hydra Glow Facial', '₹2,499'],
      ['Anti-Ageing Ritual', '₹3,499'],
    ],
  },
  {
    title: 'Bridal Makeup',
    description: 'Elegant bridal looks with long-wear artistry for ceremonies, receptions, and shoots.',
    items: [
      ['Engagement Makeup', '₹8,999'],
      ['HD Bridal Makeup', '₹18,999'],
      ['Airbrush Bridal Makeup', '₹24,999'],
    ],
  },
  {
    title: 'Nails',
    description: 'Immaculate manicure and pedicure services finished with refined color and care.',
    items: [
      ['Classic Manicure', '₹799'],
      ['Spa Pedicure', '₹1,099'],
      ['Gel Polish Finish', '₹1,499'],
    ],
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85',
    alt: 'Professional haircut and styling',
    className: 'md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85',
    alt: 'Luxury makeup detail',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85',
    alt: 'Bridal beauty look',
    className: 'md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85',
    alt: 'Salon manicure work',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85',
    alt: 'Salon hair wash and care',
    className: 'md:col-span-2',
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/25 bg-white/85 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="font-serif text-2xl font-semibold tracking-wide text-charcoal">
          Maison <span className="text-rose-500">Rose</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium uppercase tracking-[0.22em] text-charcoal/75 transition hover:text-rose-500">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {isOpen ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-charcoal/10 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/80 hover:bg-rose-gold/25">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=90"
          alt="Premium salon interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-white/10" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded-full border border-rose-gold/60 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose-gold backdrop-blur">
            Luxury Salon & Beauty Atelier
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Reinvent Your Look, Rediscover Your Confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Experience refined hair, skin, bridal, and nail services in a calm, modern space designed around your natural elegance.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#services" className="rounded-full bg-rose-gold px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-charcoal shadow-xl shadow-black/20 transition hover:bg-white">
              View Services
            </a>
            <a href="#contact" className="rounded-full border border-white/50 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-rose-gold hover:bg-rose-gold/15">
              Book a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-500">Our Services</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-charcoal sm:text-5xl">Premium beauty rituals with transparent pricing</h2>
          <p className="mt-5 text-charcoal/65">Choose from curated treatments delivered by experienced artists, stylists, and skin specialists.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-xl shadow-charcoal/5 transition hover:-translate-y-1 hover:border-rose-gold hover:shadow-2xl hover:shadow-rose-gold/20">
              <div className="mb-6 h-1.5 w-16 rounded-full bg-rose-gold" />
              <h3 className="font-serif text-2xl font-semibold text-charcoal">{service.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-charcoal/65">{service.description}</p>
              <div className="mt-6 space-y-4 border-t border-charcoal/10 pt-5">
                {service.items.map(([name, price]) => (
                  <div key={name} className="flex items-start justify-between gap-4 text-sm">
                    <span className="font-medium text-charcoal/80">{name}</span>
                    <span className="shrink-0 rounded-full bg-rose-gold/35 px-3 py-1 font-bold text-charcoal">{price}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-[#fbf7f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-500">Gallery</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-charcoal sm:text-5xl">A glimpse of our signature work</h2>
          </div>
          <p className="max-w-md text-charcoal/65">From polished hair transformations to radiant bridal artistry, every detail is crafted to photograph beautifully and feel effortless.</p>
        </div>

        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <figure key={image.src} className={`${image.className} group relative overflow-hidden rounded-[2rem] bg-charcoal shadow-xl shadow-charcoal/10`}>
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-5 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[2rem] bg-charcoal p-8 text-white shadow-2xl shadow-charcoal/20 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-gold">Contact & Location</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Visit Maison Rose</h2>
          <p className="mt-5 text-white/70">Reserve your appointment or step into our serene salon for a personalized consultation.</p>

          <div className="mt-10 space-y-7">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-gold">Opening Hours</h3>
              <p className="mt-3 text-white/80">Monday - Saturday: 10:00 AM - 8:00 PM</p>
              <p className="text-white/80">Sunday: 11:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-gold">Address</h3>
              <p className="mt-3 text-white/80">Maison Rose Salon, Ghod Dod Road, Surat, Gujarat 395007</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-gold">Phone</h3>
              <p className="mt-3 text-white/80">+91 99999 99999</p>
            </div>
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-[2rem] border border-charcoal/10 bg-rose-gold/15 shadow-xl shadow-charcoal/5">
          <iframe
            title="Maison Rose Salon location in Surat"
            src="https://www.google.com/maps?q=Ghod%20Dod%20Road%2C%20Surat%2C%20Gujarat%20395007&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi!%20I%27m%20interested%20in%20your%20services.%0ACan%20you%20please%20share%20availability%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 ring-8 ring-[#25D366]/20 transition hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25" />
      <svg className="relative h-8 w-8" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3.2A12.72 12.72 0 0 0 5.1 22.42L3.4 28.8l6.52-1.7A12.75 12.75 0 1 0 16.04 3.2Zm0 23.35c-2.05 0-4.03-.58-5.74-1.67l-.41-.26-3.87 1.01 1.03-3.76-.27-.43a10.52 10.52 0 1 1 9.26 5.1Zm5.78-7.88c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-charcoal antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-charcoal/10 bg-white px-4 py-8 text-center text-sm text-charcoal/60">
        © 2026 Maison Rose Salon. Crafted for timeless beauty.
      </footer>
      <WhatsAppButton />
    </div>
  );
}
