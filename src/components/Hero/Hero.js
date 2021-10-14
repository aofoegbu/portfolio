import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useRouter } from 'next/router';

// const router = useRouter()
// const handleClick = (e, path) => {
//   e.preventDefault();
//   router.push(path);
// }
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Ogelo Technologies
      </SectionTitle>
      <SectionText>
      We build test-driven web applications and softwares that meet user needs using  modern technologies and following best practices. Contact us today for your quality softwares!
      </SectionText>
      <Button onclick={() => window.location.href='#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;