import { useEffect } from 'react';
import { SectionGetTheQuota, SectionOurGallery, SectionVideoTour } from '../containers/Gallery';

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionOurGallery />
      <SectionVideoTour />
      <SectionGetTheQuota />
    </>
  );
}

export default Gallery;
