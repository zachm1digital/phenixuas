import { ReactNode } from 'react';

import agriculture from './civil/agriculture';
import cargo from './civil/cargo';
import construction from './civil/construction';
import customer_provided_payload_equipment from './civil/customer-provided-payload-equipment';
import fire from './civil/fire';
import imaging_video from './civil/imaging-video';
import natural_disaster_relief_response from './civil/nat-disaster-relief-response';
import public_safety from './civil/public-safety';
import research_and_development from './civil/research-and-development';
import search_and_rescue from './civil/search-and-rescue';
import utilities_energy from './civil/utilities-energy';
import def_armorment from './defense/armorment';
import def_cargo from './defense/cargo';
import def_human_cargo from './defense/human-cargo';
import def_nat_disaster_relief_response from './defense/nat-disaster-relief-response';
import dref_search_and_rescue from './defense/search-and-rescue';
import def_surveillance from './defense/surveillance';

export type MissionType = 'civil' | 'defense';

export type MainTitleProps = {
  type: 'main_title';
  title: ReactNode;
  subTitle: ReactNode;
  content: ReactNode;
};

export type ImageSectionProps = {
  type: 'image';
  src: string;
  alt: string;
  dimensions?: {
    width: number;
    height: number;
  };
};

export type MainFeatureSectionProps = {
  type: 'main_features_section';
  title?: ReactNode;
  description?: ReactNode;
  items: string[];
};

export type SpecialtySectionProps = {
  type: 'specialty_section';
  title?: ReactNode;
  items: Array<{
    id: string | number;
    icon?: string;
    title: ReactNode;
    content: ReactNode;
  }>;
};

export type TwoColumnSectionProps = {
  type: 'two_column_section';
  title: ReactNode;
  items: Array<{
    title: ReactNode;
    content: ReactNode;
  }>;
};

export type TitleContentSectionProps = {
  type: 'title_content_section';
  title: ReactNode;
  content: ReactNode;
};

export type ContentProps =
  | MainTitleProps
  | ImageSectionProps
  | MainFeatureSectionProps
  | TwoColumnSectionProps
  | TitleContentSectionProps
  | SpecialtySectionProps;

export default function getMissionData() {
  return {
    civil: {
      agriculture: agriculture(),
      cargo: cargo(),
      fire: fire(),
      'search-and-rescue': search_and_rescue(),
      'nat-disaster-relief-response': natural_disaster_relief_response(),
      'utilities-energy': utilities_energy(),
      construction: construction(),
      'imaging-video': imaging_video(),
      'customer-provided-payload-equipment': customer_provided_payload_equipment(),
      'public-safety': public_safety(),
      'research-and-development': research_and_development()
    },
    defense: {
      armorment: def_armorment(),
      cargo: def_cargo(),
      'human-cargo': def_human_cargo(),
      'nat-disaster-relief-response': def_nat_disaster_relief_response(),
      surveillance: def_surveillance(),
      'search-and-rescue': dref_search_and_rescue()
    }
  };
}

export function ItemNotFound(): ContentProps[] {
  return [
    {
      type: 'title_content_section',
      title: 'Not Found',
      content: ''
    }
  ];
}

export function createSlug(str: string) {
  let results = str.replace(/&/gi, 'and');
  results = results.replace(/[^a-zA-Z0-9]+/gi, '-');

  return results.toLowerCase();
}

export type MissionNavLinks = {
  id: string | number;
  href: string;
  label: string;
  key: string;
  category: MissionType;
  imageLandscape: string;
  imagePortrait: string;
};

export function getCivilNavLinks(): MissionNavLinks[] {
  const items: Array<MissionNavLinks> = [
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Fire',
      imageLandscape: '/images/navigation/civil-fire-mission-block-home.png',
      imagePortrait: '/images/civil-fire-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Cargo',
      imageLandscape: '/images/navigation/civil-cargo-mission-block-home.png',
      imagePortrait: '/images/civil-cargo-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Agriculture',
      imageLandscape: '/images/navigation/civil-agriculture-mission-block-home.png',
      imagePortrait: '/images/civil-agriculture-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Search & Rescue',
      imageLandscape: '/images/navigation/civil-search-rescue-mission-block-home.png',
      imagePortrait: '/images/civil-search-rescue-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    // {
    //   id: crypto.randomUUID(),
    //   key: '',
    //   label: 'Public Safety',
    //   imageLandscape: '/images/navigation/civil-public-safety-mission-block-home.png',
    //   imagePortrait: '/images/civil-public-safety-mission-block-home.png',
    //   category: 'civil',
    //   href: ''
    // },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'NAT Disaster Relief Response',
      imageLandscape: '/images/navigation/civil-nat-disaster-mission-block-home.png',
      imagePortrait: '/images/civil-nat-disaster-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Utilities / Energy',
      imageLandscape: '/images/navigation/civil-utlities-energy-mission-block-home.png',
      imagePortrait: '/images/civil-utlities-energy-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Construction',
      imageLandscape: '/images/navigation/civil-construction-mission-block-home.png',
      imagePortrait: '/images/civil-construction-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Imaging/Video',
      imageLandscape: '/images/navigation/civil-imaging-video-mission-block-home.png',
      imagePortrait: '/images/civil-imaging-video-mission-block-home.png',
      category: 'civil',
      href: ''
    },
    // {
    //   id: crypto.randomUUID(),
    //   key: '',
    //   label: 'Research & Development',
    //   imageLandscape: '/images/navigation/civil-research-development-mission-block-home.png',
    //   imagePortrait: '/images/civil-research-development-mission-block-home.png',
    //   category: 'civil',
    //   href: ''
    // },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Customer Provided Payload / Equipment',
      imageLandscape: '/images/navigation/civil-customer-payload-mission-block-home.png',
      imagePortrait: '/images/civil-customer-payload-mission-block-home.png',
      category: 'civil',
      href: ''
    }
  ];

  return items.map((item) => {
    item.key = item.key || createSlug(item.label);
    item.href = `?category=${encodeURIComponent(item.category)}&item=${encodeURIComponent(
      item.key
    )}`;

    return item;
  });
}

export function getDefenseNavLinks(): MissionNavLinks[] {
  const items: Array<MissionNavLinks> = [
    {
      id: crypto.randomUUID(),
      key: '',
      href: '',
      label: 'CARGO',
      imageLandscape: '/images/navigation/defense-cargo-mission-block-home.png',
      imagePortrait: '/images/defense-cargo-mission-block-home.png',
      category: 'defense'
    },
    {
      id: crypto.randomUUID(),
      key: '',
      href: '',
      label: 'SURVEILLANCE',
      imageLandscape: '/images/navigation/defense-surveillance-mission-block-home.png',
      imagePortrait: '/images/defense-surveillance-mission-block-home.png',
      category: 'defense'
    },
    {
      id: crypto.randomUUID(),
      key: '',
      href: '',
      label: 'ARMORMENT',
      imageLandscape: '/images/navigation/defense-armorment-mission-block-home.png',
      imagePortrait: '/images/defense-armorment-mission-block-home.png',
      category: 'defense'
    },
    {
      id: crypto.randomUUID(),
      key: '',
      label: 'Search & Rescue',
      imageLandscape: '/images/navigation/civil-search-rescue-mission-block-home.png',
      imagePortrait: '/images/civil-search-rescue-mission-block-home.png',
      category: 'defense',
      href: ''
    },
    {
      id: crypto.randomUUID(),
      key: '',
      href: '',
      label: 'NAT DISASTER RELIEF RESPONSE',
      imageLandscape: '/images/navigation/defense-nat-disaster-relief-mission-block-home.png',
      imagePortrait: '/images/defense-nat-disaster-relief-mission-block-home.png',
      category: 'defense'
    }
    // {
    //   id: crypto.randomUUID(),
    //   key: '',
    //   href: '',
    //   label: 'HUMAN CARGO',
    //   imageLandscape: '/images/navigation/defense-human-cargo-mission-block-home.png',
    //   imagePortrait: '/images/defense-human-cargo-mission-block-home.png',
    //   category: 'defense'
    // }
  ];

  return items.map((item) => {
    item.key = item.key || createSlug(item.label);
    item.href = `?category=${encodeURIComponent(item.category)}&item=${encodeURIComponent(
      item.key
    )}`;

    return item;
  });
}
