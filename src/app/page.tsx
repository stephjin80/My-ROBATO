import HomeHero         from "@/components/home/HomeHero";
import WhatIsMyRobato   from "@/components/home/WhatIsMyRobato";
import FoundationalYears from "@/components/home/FoundationalYears";
import EducationProblem  from "@/components/home/EducationProblem";
import SolutionPillars   from "@/components/home/SolutionPillars";
import LayeredSystem     from "@/components/home/LayeredSystem";
import HomeCTA           from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatIsMyRobato />
      <FoundationalYears />
      <EducationProblem />
      <SolutionPillars />
      <LayeredSystem />
      <HomeCTA />
    </>
  );
}
