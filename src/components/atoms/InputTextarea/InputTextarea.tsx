'use client';
import { InputTextarea as PrimeInputTextarea, InputTextareaProps } from 'primereact/inputtextarea';
import React from 'react';

const InputTextarea = (props: InputTextareaProps) => {
  return <PrimeInputTextarea {...props} />;
};

export default InputTextarea;
