import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Ogelo Technologies
      </SectionTitle>
      <SectionText>
        Welcome to Ogelo technologies, I am a Frontend developer with a passion for building quality web apps across different industries. From  healthcare sites to crypto exchanges, we build these using modern development technologies, approaches and best practices. 
      </SectionText>
      <Button onclick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;