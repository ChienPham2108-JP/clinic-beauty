import { useEffect } from 'react';
import { SectionAssistance, SectionOurTeam, SectionSlogan, SectionOurTestimonials } from '../containers/Team';

function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionOurTeam />
      <SectionAssistance />
      <SectionSlogan />
      <SectionOurTestimonials />
    </>
  );
}

export default TeamPage;
