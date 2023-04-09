import { useEffect } from 'react';

import { MainSlider, CoreServices, AboutUs, ProfessionalTeams, ContactUs } from '../containers/Home';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainSlider />
      <CoreServices />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
    </>
  );
}

export default Home;
