import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Abementis"
              width={500}
              height={500}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Empowering boys to become emotionally healthy, resilient men —
              and breaking the silence around male abuse in Nigeria.
            </p>
            <div className="mt-6 flex gap-5">
              <a
                href="https://www.instagram.com/abementis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abementis on Instagram"
                className="text-white/60 transition-colors hover:text-amber"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/abementis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abementis on LinkedIn"
                className="text-white/60 transition-colors hover:text-amber"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="7.5" y1="10" x2="7.5" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="7.5" cy="6.8" r="1.15" fill="currentColor" />
                  <path
                    d="M11 17v-4.2c0-1.4 1-2.3 2.2-2.3 1.2 0 2 .9 2 2.3V17"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="11" y1="10.3" x2="11" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/50">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#crisis" className="text-white/80 transition-colors hover:text-amber">The crisis</a></li>
              <li><a href="#approach" className="text-white/80 transition-colors hover:text-amber">Our approach</a></li>
              <li><a href="#impact" className="text-white/80 transition-colors hover:text-amber">Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/50">Get involved</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf0jjRzeeIlUAccegKd0RCRGjskRtxx5nM5quxRjkRQ8us0mw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-amber"
                >
                  Volunteer or mentor
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSesridhScpQEzeUuAt_OyU6Iikdqn3rUS9p4QIcFNwO6JrNlg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-amber"
                >
                  Partner with us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/50">Based in</h4>
            <p className="mt-4 text-sm text-white/80">Nigeria</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Abementis. All rights reserved.</p>
          <p>Raising the boy child. Healing the invisible wounds.</p>
        </div>
      </div>
    </footer>
  );
}
