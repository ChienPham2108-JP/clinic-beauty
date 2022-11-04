import { useEffect } from 'react';

import { MainSlider } from '../containers/Home';
import { CoreServices } from '../containers/Home';
import { AboutUs } from '../containers/Home';
import { ProfessionalTeams } from '../containers/Home';
import { ContactUs } from '../containers/Home';

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
