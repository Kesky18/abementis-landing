import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ImageBand() {
  return (
    <section className="bg-white py-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2">
        <Reveal>
          <figure className="relative h-72 overflow-hidden sm:h-96">
            <Image
              src="/images/bicycle-boys.avif"
              alt="Two boys sharing a bicycle in their neighborhood, all smiles"
              fill
              className="object-cover"
            />
          </figure>
        </Reveal>
        <Reveal delay={0.12}>
          <figure className="relative h-72 overflow-hidden sm:h-96">
            <Image
              src="/images/classroom.avif"
              alt="Boys attentive in a classroom, part of community education outreach"
              fill
              className="object-cover grayscale"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
