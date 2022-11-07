import { Box } from '@material-ui/core';
import { ServiceSection } from './components';
import animation1 from '../../assets/images/service-animation1.svg';

function SectionBeautyConsultation() {
  return (
    <Box>
      <ServiceSection
        img={animation1}
        subject="Beauty Consultation"
        heading="We services beauty
        consultation"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        reverse={false}
      />
    </Box>
  );
}

export default SectionBeautyConsultation;
