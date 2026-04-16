import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ValueProps from "@/components/sections/ValueProps";
import FeaturedPrograms from "@/components/sections/FeaturedPrograms";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ValueProps />
      <FeaturedPrograms />
      <Testimonials />
      <CallToAction />
    </>
  );
}
