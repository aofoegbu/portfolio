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
        Ogelo's Page
      </SectionTitle>
      <SectionText>
      Augustine "Ogelo" Ofoegbu is a Frontend developer with good understanding of Reactjs and its concepts including  Components, Hooks, Promises, Props and State Management; to go with a First Class Honours Computer Science degree.
      </SectionText>
      <Button onclick={() => window.location.href='#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;