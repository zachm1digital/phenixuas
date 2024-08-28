import { InputSwitchProps, InputSwitch as PrimeInputSwitch } from 'primereact/inputswitch';
import React from 'react';

const InputSwitch: React.FC<InputSwitchProps> = (props) => {
  return <PrimeInputSwitch {...props} />;
};

export default InputSwitch;
