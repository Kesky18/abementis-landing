import Reveal from "@/components/Reveal";

const actions = [
  {
    title: "Volunteer or mentor",
    text: "Lend your time and guidance to shape young lives.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf0jjRzeeIlUAccegKd0RCRGjskRtxx5nM5quxRjkRQ8us0mw/viewform",
  },
  {
    title: "Partner with us",
    text: "Collaborate as a school, corporate body, or fellow NGO.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSesridhScpQEzeUuAt_OyU6Iikdqn3rUS9p4QIcFNwO6JrNlg/viewform",
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-xl">
            <h2 className="font-display text-3xl leading-tight text-navy md:text-4xl">
              Stand with us today
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ash">
              Whether you volunteer, mentor, or partner with us, your support
              helps us reach more boys and survivors across Nigeria who need
              it most.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 border-t border-navy/10 pt-10 sm:grid-cols-2">
          {actions.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-navy/10 p-7 transition-colors hover:border-amber/60"
              >
                <h3 className="font-display text-xl text-navy">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">{a.text}</p>
                <span className="mt-5 inline-block text-sm font-medium text-amberdeep">
                  Fill the form
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
