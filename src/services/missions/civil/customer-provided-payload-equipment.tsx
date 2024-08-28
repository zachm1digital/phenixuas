import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Customer Provided Payload / Equipment',
      subTitle: (
        <>Phenix Solutions can tailor equipment and customer payloads for their operations.</>
      ),
      content: (
        <>
          <p>
            Our Phenix teams in Sales and Engineering understand that every project comes with
            unique challenges and requirements, so we are dedicated to finding solutions. We offer
            specialized services in integrating customer equipment and payloads into various
            applications. Our expertise and dedication to precision engineering ensure seamless
            integration and optimal performance for your specific needs.
          </p>
          <p>Every mission is different, and we are up to the challenge.</p>
          <p>Contact us to discuss the specific requirements.</p>
        </>
      )
    }
  ];
}

export default getData;
