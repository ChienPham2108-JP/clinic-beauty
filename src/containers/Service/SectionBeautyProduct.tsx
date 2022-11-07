import { Box } from '@material-ui/core';
import { ServiceSection } from './components';
import animation3 from '../../assets/images/service-animation3.svg';

function SectionBeautyProduct() {
  return (
    <Box style={{ marginBottom: '130px' }}>
      <ServiceSection
        img={animation3}
        subject="Beauty Product"
        heading="We present quality beauty products"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        reverse={false}
      />
    </Box>
  );
}

export default SectionBeautyProduct;
