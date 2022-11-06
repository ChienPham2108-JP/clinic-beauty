import React, { useEffect } from 'react';
import { SectionAbout } from '../containers/About';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionAbout />
    </>
  );
}

export default About;
