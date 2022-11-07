import { Box } from '@material-ui/core';
import { ServiceSection } from './components';
import animation2 from '../../assets/images/service-animation2.svg';

function SectionSkinTreatment() {
  return (
    <Box>
      <ServiceSection
        img={animation2}
        subject="Skin Treatements"
        heading="Skin care and
        treatment by expert"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        reverse={true}
      />
    </Box>
  );
}

export default SectionSkinTreatment;
