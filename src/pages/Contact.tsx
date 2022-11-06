import { useEffect } from 'react';

import { SectionContactForm, SectionContactInfo } from '../containers/Contact';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionContactForm />
      <iframe
        title="google map"
        width="100%"
        height="418"
        frameBorder="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=15/8%20Duy%20Tan+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a>
      </iframe>
      <SectionContactInfo />
    </>
  );
}

export default Contact;
