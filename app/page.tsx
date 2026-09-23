import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ImageBand from "@/components/ImageBand";
import Solution from "@/components/Solution";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <ImageBand />
      <Solution />
      <Impact />
      <GetInvolved />
      <Footer />
    </main>
  );
}
