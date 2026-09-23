import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Impact() {
  return (
    <section id="impact" className="relative isolate overflow-hidden bg-navy py-28 md:py-36">
      <Image
        src="/images/care-portrait.avif"
        alt=""
        fill
        className="-z-20 object-cover object-center opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-navy/60" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
            Restoring hope, one life at a time
          </h2>

          <span aria-hidden className="mt-10 block font-display text-6xl leading-none text-amber/70 md:text-7xl">
            &ldquo;
          </span>
          <p className="mx-auto -mt-4 max-w-xl font-display text-2xl leading-snug text-white md:text-3xl">
            Inside every adult male is a denied little boy.
          </p>
          <p className="mt-6 text-sm text-white/70">— Nancy Friday</p>

          {/*
            TODO: once Abementis has a real, consented beneficiary quote,
            it can replace or sit alongside the Nancy Friday line above.
          */}
        </Reveal>
      </div>
    </section>
  );
}
