'use client';

import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: string;
  className?: string;
  labelClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className = '',
  labelClassName = '',
  ...props
}) => {
  const id = props.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className={`ml-2 block text-sm text-gray-800 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Checkbox;