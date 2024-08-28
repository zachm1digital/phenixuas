import { CheckboxProps, Checkbox as PrimeCheckbox } from 'primereact/checkbox';
import React from 'react';

const CheckboxButton: React.FC<CheckboxProps> = (props) => {
  return <PrimeCheckbox {...props} />;
};

export default CheckboxButton;
