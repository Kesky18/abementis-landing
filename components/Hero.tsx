"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20"
    >
      <Image
        src="/images/hero-eye.avif"
        alt=""
        fill
        priority
        className="-z-20 object-cover object-[center_30%]"
      />
      {/* transparent gradient scrim so the photo shows through while keeping text legible */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/75 to-navy/35" />
      <div className="absolute inset-0 -z-10 bg-navy/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl px-6"
      >
        <motion.p variants={item} className="mb-6 flex items-center gap-2 text-sm text-white/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          Building a safer, stronger future for the next generation
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl leading-[1.15] text-white drop-shadow-sm sm:text-5xl md:text-6xl"
        >
          Raising the boy child. Healing the invisible wounds.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          Abementis is a non-profit dedicated to empowering boys to become
          emotionally healthy, resilient men — while breaking the silence
          around male abuse and providing the support they deserve.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#approach"
            className="rounded-sm border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Learn more
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
