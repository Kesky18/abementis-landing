import Reveal from "@/components/Reveal";

const pillars = [
  {
    title: "Advocacy & support",
    text: "Confidential resources, counseling pathways, and legal advocacy for male survivors of abuse.",
    icon: (
      <path
        d="M16 4 6 8v7c0 6.5 4.3 10.6 10 13 5.7-2.4 10-6.5 10-13V8L16 4Z"
        stroke="#E3A23D"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Holistic boy child development",
    text: "Mentorship programs teaching emotional intelligence, healthy masculinity, leadership, and self-worth.",
    icon: (
      <path
        d="M6 9.5 16 6l10 3.5v9L16 22 6 18.5v-9Z M16 6v16 M6 9.5l10 3.5 10-3.5"
        stroke="#E3A23D"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Community education",
    text: "Dismantling harmful cultural norms through workshops, school outreach, and public awareness campaigns.",
    icon: (
      <path
        d="M5 13h4l9-6v18l-9-6H5v-6Z M22 11c1.2 1 1.2 5 0 6"
        stroke="#E3A23D"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
];

export default function Solution() {
  return (
    <section id="approach" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-navy md:text-4xl">
              How we are changing the narrative
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ash">
              At Abementis, we believe prevention, education, and safe spaces
              are the keys to lasting change.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-navy/10 pt-10 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div>
                <svg viewBox="0 0 32 26" className="h-8 w-8" aria-hidden>
                  {p.icon}
                </svg>
                <h3 className="mt-5 font-display text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
