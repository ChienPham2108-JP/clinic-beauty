import { useEffect } from 'react';
import { Content, SectionTitle } from '../containers/Blog';

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionTitle />
      <Content />
    </>
  );
}

export default Blog;
