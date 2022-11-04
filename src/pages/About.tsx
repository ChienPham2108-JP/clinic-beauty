import React, { useEffect } from 'react';

import AboutUs from '../containers/Home/AboutUs';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutUs />
    </>
  );
}

export default About;
