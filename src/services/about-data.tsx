import { ReactNode } from 'react';

import { LeadershipSectionItem } from '@/components/organisms/LeadershipSection';

export type HistoryProps = {
  id: string | number;
  date: string;
  description: ReactNode;
  title: ReactNode;
  image?: string | null | undefined;
  isCover?: boolean;
};

export function getHistories(): HistoryProps[] {
  return [
    {
      id: crypto.randomUUID(),
      date: '2011',
      title: '',
      description: (
        <>
          <p>2011 P Phenix Solutions is founded by Brian Riese in West Linn, OR</p>
        </>
      ),
      image: '/images/history-images/2011.png',
      isCover: false
    },
    {
      id: crypto.randomUUID(),
      date: '2018',
      title: '',
      description: (
        <>
          <p>
            Phenix Solution’s Brian Riese President and CEO and Mark Zimmerman former CEO of
            Simplex Aerospace beginning to work together to search out a Heavy-Lift UAS capable
            aircraft already available in the marketplace. The goal is for the UAS to be able to
            meet the needs of wildfire suppression and aerial application industries.
          </p>
        </>
      ),
      image: '/images/history-images/2018.png',
      isCover: true
    },
    {
      id: crypto.randomUUID(),
      date: 'May 2019',
      title: '',
      description: (
        <>
          <p>
            Phenix Solutions launches the development of the Ultra 2XL to pursue of a Heavy-Lift
            UAS.
          </p>
        </>
      ),
      image: '/images/history-images/image5.png',
      isCover: true
    },
    {
      id: crypto.randomUUID(),
      date: 'September 2019',
      title: '',
      description: (
        <>
          <p>Phenix Solutions enters a contract with the USAF agility prime program.</p>
        </>
      ),
      image: '/images/history-images/image4.png',
      isCover: true
    },
    {
      id: crypto.randomUUID(),
      date: 'September 2021',
      title: '',
      description: (
        <>
          <p>
            September 2021 Phenix solution is selected and completes Phase I Digital Engineering
            contract.
          </p>
        </>
      ),
      image: '/images/history-images/image6.png',
      isCover: true
    },
    {
      id: crypto.randomUUID(),
      date: 'February 2022',
      title: '',
      description: (
        <>
          <p>
            Phenix solutions is selected for the MULS-A contract. Estimated completion summer of
            2024
          </p>
        </>
      ),
      image: '/images/history-images/image7.jpg',
      isCover: true
    },
    {
      id: crypto.randomUUID(),
      date: 'March 2022',
      title: '',
      description: (
        <>
          <p>Phenix Solutions presents the Ultra 2XL to the civilian market at HAI HELI-EXPO</p>
        </>
      ),
      image: '/images/history-images/march-2022-1.png',
      isCover: true
    },
    {
      id: crypto.randomUUID(),
      date: 'March 2022',
      title: '',
      description: (
        <>
          <p>Phenix solutions opens headquarters in McMinnville, OR on the NW UAV campus.</p>
        </>
      ),
      image: '/images/history-images/march-2022-2.jpg',
      isCover: true
    },
    {
      id: crypto.randomUUID(),
      date: 'July 2023',
      title: '',
      description: (
        <>
          <p>
            Phenix solution was selected Phase II Digital Engineering contract estimate completion
            2024.
          </p>
        </>
      ),
      image: '/images/history-images/image17.png',
      isCover: true
    }
  ];
}

export default function getLeadershipList(): LeadershipSectionItem[] {
  return [
    {
      id: crypto.randomUUID(),
      name: 'Brian Riese',
      position: 'President & Chief Executive Officer',
      image: '/images/about/persons/Brian Riese.webp',
      // phone: '555-555-5555',
      email: 'Brian@phenixuas.com',
      content: (
        <>
          <p>
            Mr. Riese is a Combat Veteran and brings over 30 years of U.S Army experience to Phenix
            Solutions. Mr. Riese held many leadership and policy development positions during his
            years of Military service, including several military procurement and contract
            management positions. During his tenure in the US Army, he held an Unlimited Federal
            Contracting Officers Warrant as he served as the Source Selection Authority for all
            multi-million dollar procurement actions for his agency. He is a graduate of the US Army
            Command and General Staff College and maintains a top-secret security clearance. Mr.
            Riese has diverse senior executive level experience in government affairs, as well as
            varied operational military assignments.
          </p>
          <p>
            As President of Phenix Solutions, Mr. Riese brings years of senior level management
            experience from within the US government and has real-word hands-on experience in
            transitioning emerging technology to solve real world needs within the aerospace
            industry, today. Mr. Riese originally founded Phenix Solutions in 2011 as a veteran
            owned services company and transformed the company in 2019 with new investment and
            shareholders from former Simplex Aerospace. Mr. Riese continues to guide Phenix in our
            journey to be a successful non-traditional defense contractor by leveraging ongoing
            support under USAF Agility Prime and AFWERX programs. This effort led to the delivery of
            two initial prototype aircraft, and the development of the first civil certified Heavy
            Lift Remote Piloted Aircraft, the Phenix Ultra 2XL aircraft. The Ultra 2XL represents
            the culmination of Phenix’s dedication to our mission to develop and deliver a certified
            true heavy lift Remote Piloted Aircraft of significant consequence for the Defense and
            Civil Aviation Markets.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Mark Zimmerman',
      position: 'Chief Financial Officer',
      image: '/images/about/persons/Markl Zimmerman_PNG.webp',
      // phone: '555-555-5555',
      email: 'Mark@phenixuas.com',
      content: (
        <>
          <p>
            Mark Zimmerman is an entrepreneur and business executive with over 30 years
            international business focused on the development and integration of emerging
            technologies into certified multi-mission aircraft and application equipment. Mr.
            Zimmerman served as President & CEO of Simplex Aerospace between 2001-2020.
          </p>
          <p>
            Simplex Aerospace is the world’s leading provider of certified rotorcraft aerial
            application equipment serving aerial wildland firefighting, high-rise building
            firefighting, agricultural application, electrical power and windmill cleaning and
            deicing, oil spill response, helitorch burning, mosquito control, aerial seeding and
            other aerial missions. Simplex’s systems are in operation in over 100 countries for 75
            years and are known for their quality, durability, and longevity. Over his career, Mr.
            Zimmerman has served as a speaker, expert witness and as an advisor for the United
            States Government’s Industry Technical Advisory Committee – Aviation (ITAC1) with the
            Department of Commerce.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Daniel Wright',
      position: 'Chief Operational Officer / Airworthiness & Certification',
      image: '/images/about/persons/Daniel Wright.webp',
      // phone: '555-555-5555',
      email: 'Dan@phenixuas.com',
      content: (
        <>
          <p>
            Mr. Wright brings over 35 years of aviation experience to the PSI team. Mr. Wright began
            his career in the US Air Force and has since lead programs in all aspects of the
            aviation field to include R&D, experimental and certified design, development and flight
            testing, and has worked with several space companies to design, manufacture, approve and
            launched multiple components. For the past 10 years Mr. Wright lead the FAA
            Certification efforts for Simplex Aerospace certifying Fire Attack, Agricultural Spray
            and Highrise Firefighting system installed on Part 27 and 29 rotorcraft. Mr. Wright has
            a background in the high-tech composite industry as well as traditional metal design and
            fabrication and is a FAA licensed Airframe & Power Plant technician. Mr. Wright holds a
            BS in business management and has sat on several collage steering committees to help
            develop curriculum for advanced composite processing.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Sarah Riese',
      position: 'Assistant Corporate Secretary',
      image: '/images/about/persons/Sarah Riese.jpg',
      // phone: '555-555-5555',
      email: 'sarah@phenixuas.com',
      content: (
        <>
          <p>
          With a rich career spanning over two decades in healthcare, Sarah brings a unique blend of
          clinical expertise and administrative acumen to her role as Assistant Corporate Secretary at
          Phenix Solutions.
          A retired Registered Nurse, Sarah initially dedicated her career to patient care, providing
          compassionate and skilled nursing services across various healthcare settings, the ICU and
          homebase primary care to homebound patients. Her commitment to excellence in nursing was
          marked by her hands-on experience in patient management, interdisciplinary collaboration, and
          clinical education.
          With her meticulous attention to detail and organizational skills Mrs. Riese stepped into the role
          of managing the accounting of Phenix Solutions when it was founded in 2011 by Mr. Brian Riese
          while still performing her role as an ICU nurse. With the growth of Phenix Solutions and the
          transition into an aircraft manufacturing company Mrs. Riese retired from her nursing career
          while continuing her current responsibilities in Phenix Solutions as Assistant Corporate
          Secretary for Phenix Solutions. As Assistant Corporate Secretary, she plays a pivotal role in
          supporting the company’s board of directors and executive team. Her responsibilities include
          managing board meetings, ensuring compliance with corporate policies, and maintaining
          accurate records.
          Sarah holds a degree in Nursing from Oregon Health Science University and a degree in Sports
          Medicine from University of Oregon and has undergone training in accounting from University
          of Phoenix. Her diverse background and dedication to both healthcare and corporate
          administration make her an invaluable asset to Phenix Solutions where she contributes to the
          smooth operation and strategic oversight of the company’s governance framework.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'David Kruithoff',
      position: 'Director of Engineering',
      image: '/images/about/persons/David Kruithoff2.png',
      // phone: '555-555-5555',
      email: 'David@phenixuas.com',
      content: (
        <>
          <p>
            Mr. Kruithoff was the R&D design engineering for Simplex Aerospace for the past ten
            years developing and designing new products and technologies. David is co-patent holder
            of the SkyCannon High Rise Firefighting System. Prior to joining Simplex, David was a
            design engineer for LifePort, developing medical transport aerial mission equipment.
          </p>
        </>
      )
    },
    // {
    //   id: crypto.randomUUID(),
    //   name: 'Larry Lichtenberger',
    //   position: 'Flight Operations',
    //   image: '/images/about/persons/Larry Lichtenberger2.png',
    //   // phone: '555-555-5555',
    //   email: 'Larry@phenixuas.com',
    //   content: (
    //     <>
    //       <p>
    //         Mr. Lichtenberger is a private pilot, 107 pilot, and flight instructor. Prior to joining
    //         Phenix was EVP of Simplex Aerospace responsible for worldwide business development,
    //         sales, product portfolio management, and customer service. In addition, Larry has sold
    //         avionics for L3, developed and certified new aviation technology for UPS and owned a
    //         private electronics company
    //       </p>
    //     </>
    //   )
    // },
    // {
    //   id: crypto.randomUUID(),
    //   name: 'Paul Comtois',
    //   position: 'Flight Instructor & Training',
    //   image: '/images/about/persons/Paul Comtois.png',
    //   phone: '555-555-5555',
    //   email: 'email@test.com',
    //   content: (
    //     <>
    //       <p>
    //         Mr. Comtois has +30 years of experience in Aviation Operations and Safety, Specializing
    //         in Pilot Training. A retired USAF Colonel and Command Pilot with 3,000 hours in fighter,
    //         trainer, and heavy aircraft, he has held leadership positions as the 111th Fighter Wing
    //         Commander and served in the Pennsylvania Air National Guard (ANG). Paul was instrumental
    //         in establishing the first Joint Interagency Installation in the United States as well as
    //         the National Collaboration Development Center, a key United States intelligence,
    //         national security, and homeland security training facility. Paul developed and patented
    //         a simulation design enhancing pilot training program intended to combat Loss of Control
    //         In-flight (LOC-I).
    //       </p>
    //     </>
    //   )
    // },
    {
      id: crypto.randomUUID(),
      name: 'Mason Comtois',
      position: 'Director of Systems Engineering & Integration',
      image: '/images/about/persons/Mason-Comtois.jpeg',
      // phone: '555-555-5555',
      email: 'Mason@phenixuas.com',
      content: (
        <>
          <p>
            Mason is a highly skilled and experienced professional with a distinguished career in
            Systems Integration for the next generation of aerospace platforms for the military and
            civilian markets. Additionally, Mason has worked on cutting-edge technology, including
            SIGINT and COMINT systems.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Vince Habeck',
      position: 'Director of Programs',
      image: '/images/about/persons/Vince_Habeck_1_optimized.png',
      // phone: '555-555-5555',
      email: 'vincent@phenixuas.com',
      content: (
        <>
          <p>
          Vince Habeck is a dynamic leader with a proven track record of success in both military
          and corporate environments. With extensive experience in program management,
          strategic planning, and team leadership, Vince has consistently demonstrated his ability
          to guide teams through complex operational challenges while fostering a culture of
          continuous improvement and innovation. He excels at communicating effectively across
          all organizational levels, ensuring alignment between senior leaders and junior team
          members. As an experienced public speaker and mentor, Vince is passionate about
          developing talent and maximizing team performance.

          Currently serving as the Director of Programs at Phenix Solutions, Vince is responsible
          for the strategic direction and management of aviation programs, with a focus on
          Unmanned Aircraft Systems (UAS) technology. His role involves overseeing key
          initiatives that drive growth and innovation in the aviation industry. Prior to this, Vince
          held several leadership positions in the Oregon Army National Guard, where he
          authored comprehensive training plans, managed large-scale operations, and led a 40-
          man recruiting company. His military career is marked by his ability to execute complex
          plans and manage substantial budgets, all while achieving significant organizational
          goals.

          Vince holds a Master of Science in Organizational Leadership from Central Michigan
          University and a Bachelor of Science in Business Administration (Marketing) from
          Southern Oregon University. His diverse background and extensive leadership
          experience make him a valuable asset in any organization, particularly in roles that
          require strategic planning, team development, and operational excellence.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Casey Zimmerman',
      position: 'Director of Business Development & Sales',
      image: '/images/about/persons/Casey Zimmerman.png',
      // phone: '555-555-5555',
      email: 'Casey@phenixuas.com',
      content: (
        <>
          <p>
            Mr. Zimmerman is an alumnus of Simplex Aerospace where he was Director of Regional Sales
            for North & South America. Mr. Zimmerman selected, vetted, and managed network of
            country representatives as well as was directly involved in product sales and customer
            service. Casey was instrumental in commercialization of new products within his region.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Jonathan Berkley',
      position: 'General Manager',
      image: '/images/about/persons/Jonathan Berkley.jpg',
      // phone: '555-555-5555',
      email: 'Jonathan@phenixuas.com',
      content: (
        <>
          <p>
            Mr.Berkley served 12 years in the Oregon National Guard where he worked closely with
            Brian Riese. He has a background in Government Accounting and ERP setup and
            implementation. Jonathan was an employee of the original Phenix company and has owned
            and operated his own construction company.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Ephraim Nowak',
      position: 'System Engineer Manager',
      image: '/images/about/persons/Ephraim Picture.jpg',
      //phone: '555-555-5555',
      email: 'ephraim@phenixuas.com',
      content: (
        <>
          <p>
          Mr. Nowak brings a wealth of large UAS experience to the Phenix Solutions team. In his
          role as Systems Engineering Manager, Mr. Nowak uses his interdisciplinary background
          in software, electrical, and mechanical engineering to take new ideas from concept
          through prototype, and into production.
          Before joining Phenix Solutions, Ephraim led engineering teams on multiple successful
          large rotary-wing UAS development programs. He has also developed an aerial wildfire
          mapping system for a government customer, a novel cockpit video recorder for small
          aircraft, and is a former Search and Rescue EMT, Search Manager, and Rope /
          Swiftwater / Avalanche rescue technician.
          Mr. Nowak holds a Bachelor’s degree in Computer Science and a Master’s degree in
          Electrical Engineering. His background in engineering leadership and boots-on-the-
          ground operational experience makes him a great fit for developing game-changing UAS
          technologies for civilian and defense applications.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Jordan McGovern',
      position: 'Publications Manager',
      image: '/images/about/persons/Jordan McGovern.jpg',
      // phone: '555-555-5555',
      email: 'Jordan@phenixuas.com',
      content: (
        <>
          <p>
            With over a decade in aerospace documentation, Jordan is an experienced technical
            documents and publications manager with a proven track record in creating, organizing,
            and disseminating technical content. Jordan Handles the day-to-day support of all team
            levels and ensures compliance with industry standards. He is always focused on our
            customers, so delivering high-quality documentation to support them is a top priority to
            keep them flying.
          </p>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      name: 'Santiago Matallana',
      position: 'Senior Programs Engineer',
      image: '/images/about/persons/Santiago3.jpg',
      // phone: '555-555-5555',
      email: 'Santiago@phenixuas.com',
      content: (
        <>
          <p>
            Santiago has 20+ years in the aerospace industry; he has been involved in various
            aspects of aircraft design, development, and testing. He is a highly experienced and
            multidisciplinary Senior engineer with a robust software, systems, mechanical,
            electrical, and aerospace engineering background. He has contributed to and worked
            successfully on countless projects throughout his aerospace career, utilizing his skills
            in electrical, mechanical, fluid dynamics, controls, aerodynamics, CFD, design,
            analysis, systems, etc. With multidisciplinary integration engineering skills and
            leadership of our Ultra 2XL program, Santiago is a vital team member for Phenix.
          </p>
        </>
      )
    }
  ];
}
