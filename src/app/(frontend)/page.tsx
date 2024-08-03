// import Globe from "@/components/magicui/globe"
import Particles from "@/components/magicui/particles";
import { ParticlesDemo } from "@/components/particles";

import { Main, Section, Container } from "@/components/ui/craft";
import GlobeDemo from "@/components/example/globe-demo";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>Heading</h1>
          <p>Content</p>
          <ParticlesDemo />
          {/* <GlobeDemo /> */}
        </Container>
      </Section>
    </Main>
  );
}