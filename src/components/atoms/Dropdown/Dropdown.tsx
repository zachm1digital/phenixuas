import { Dropdown as PrimeDropdown, DropdownProps } from 'primereact/dropdown';
import React from 'react';

const Dropdown: React.FC<DropdownProps> = (props) => (
  <div>
    <PrimeDropdown {...props} />
  </div>
);

export default Dropdown;
