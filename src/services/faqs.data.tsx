import { ReactNode } from 'react';

export type QuestionProps = {
  question: ReactNode;
  answer: ReactNode;
  ctaText: ReactNode;
  ctaLink: string;
};

export type FAQsProps = {
  title: ReactNode;
  description: ReactNode;
  questions: Array<QuestionProps>;
};

export default function getFaqsData() {
  const faqs: FAQsProps = {
    title: 'Helpful Answers to Common Questions.',
    description: 'If you have any more questions please contact our team to discuss our aircraft.',
    questions: [
      {
        question: 'How is the Phenix Ultra 2XL powered?',
        answer:
          'The Phenix Ultra 2XL is powered by a certified Rolls-Royce RR300 turboshaft engine.  The Rolls-Royce RR300 was selected due to its well-established reputation, maintenance, safety record and overall performance.',
        ctaText: 'Contact Us',
        ctaLink: '/contact'
      },
      {
        question: 'Why is the Phenix Ultra 2XL a Coaxial Rotor System?',
        answer:
          'The Phenix Ultra 2XL Coaxial Rotor System offers many advantages over a quadcopter or a traditional helicopter design in both safety and performance.  The Phenix Phenix Ultra 2XL replaced the fuel thirsty quad engine prototype but is achieving better payload results with much greater range, stability, and hover performance.  The Phenix Ultra 2XL utilizes an optimized 24’ Coaxial Rotor System producing a 30% increase in lift over traditional designs as the coaxial blades avoid the effects of dissymmetry of lift.  Also, the coaxial system eliminates the need for a tail rotor which can contribute to rotorcraft accidents such as tail strikes.  In maximizing performance for our customers, the Phenix Ultra 2XL delivers increased stability, maneuverability and affords a smaller aircraft footprint.  The coaxial rotor system we developed for the Phenix Ultra 2XL has a better power to weight ratio, more significant lifting, and more efficiency over traditional designs and aircraft configurations.',
        ctaText: 'Contact Us',
        ctaLink: '/contact'
      },
      {
        question: 'What is the maximum range for Phenix Ultra 2XL?',
        answer:
          'The Phenix Ultra 2XL has a maximum range of 300 NM with the onboard fuel tank.  The Phenix Ultra 2XL has a fuel consumption rate of 25 gallons per hour with a top speed of 150 knots (unloaded).  The Phenix Ultra 2XL can fitted with an optional 125-gallon auxiliary fuel tank that will increase the range to well over 900 NM delivering a payload over 500 lbs.',
        ctaText: 'Contact Us',
        ctaLink: '/contact'
      },
      {
        question: 'How much can the Phenix Ultra 2XL lift?',
        answer: 'The Phenix Ultra 2XL is a heavy-lift UAS with an MTOW of 3000lbs.',
        ctaText: 'Contact Us',
        ctaLink: '/contact'
      },
      {
        question:
          'Are there any ITAR (International Traffic in Arms Regulations) issues with the Ultra 2XL?',
        answer:
          'The basic model of the Ultra 2XL doesn’t have any ITAR issues and Phenix plans to sale the Ultra 2XL worldwide. Pheinx does offer some features that are ITAR restricted but those determinations depend on a case-by-case basis.',

        ctaText: 'Contact Us',
        ctaLink: '/contact'
      },
      {
        question: 'What fuel is required to use the Ultra 2XL?',
        answer: (
          <>
            <p>
              Primary. Fuels conforming to the following military and commercial specifications are
              approved for unrestricted use in RR300 Series engines.
            </p>
            <br />
            <ul style={{ listStyle: 'outside', paddingLeft: '1rem' }}>
              <li>MIL-DTL-5624, Grade JP-4 and JP-5</li>
              <li>MIL-DTL-83133, Grade JP-8</li>
              <li>ASTM D-6615, Jet B</li>
              <li>ASTM D-1655, Jet A or A1</li>
              <li>GOST 10227-86 (Russia), Grades TS-1 and RT</li>
              <li>GSTU 320.00149943.007-97 (Ukraine), Grade RT</li>
              <li>GSTU 320.00149943.011-99 (Ukraine), Grade TS-1</li>
              <li>STAS 5639-88 (Romania), Grade TH</li>
              <li>UK Defense Standard 91-91, Semi Synthetic and Fully Synthetic</li>
              <li>GB 6537 (Peoples Republic of China), Grade No. 3</li>
            </ul>
          </>
        ),
        ctaText: 'Contact Us',
        ctaLink: '/contact'
      }
    ]
  };

  return { faqs };
}
