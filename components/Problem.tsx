import Reveal from "@/components/Reveal";

const points = [
  {
    label: "The stigma of silence",
    text: "Male abuse and trauma are heavily underreported due to social shame and the fear of not being believed.",
  },
  {
    label: "The emotional toll",
    text: "Unaddressed childhood trauma and lack of mentorship often surface later as anger, anxiety, and self-harm.",
  },
  {
    label: "A broken cycle",
    text: "Without intervention, wounded boys grow into isolated men, carrying the hurt forward into families and communities.",
  },
];

export default function Problem() {
  return (
    <section id="crisis" className="bg-bone py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl leading-tight text-navy md:text-4xl">
              The silent crisis facing our boys
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ash">
              Society often tells boys to tough it out, masking pain behind
              silence. This culture of suppression leaves millions vulnerable
              to abuse, emotional distress, and isolation — without a safe
              place to turn.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="border-t border-navy/10">
            {points.map((p) => (
              <div
                key={p.label}
                className="grid gap-2 border-b border-navy/10 py-7 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8"
              >
                <h3 className="font-display text-lg text-navy">{p.label}</h3>
                <p className="text-base leading-relaxed text-ash">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
