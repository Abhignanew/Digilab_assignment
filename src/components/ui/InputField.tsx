'use client';

import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  className = '',
  inputClassName = '',
  leftIcon,
  rightIcon,
  fullWidth = false,
  ...props
}) => {
  const containerClasses = `relative ${fullWidth ? 'w-full' : ''} ${className}`;
  const inputClasses = `
    border border-gray-400 rounded-sm py-3 px-4 text-sm
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    ${error ? 'border-red-500' : ''}
    ${leftIcon ? 'pl-10' : ''}
    ${rightIcon ? 'pr-10' : ''}
    ${fullWidth ? 'w-full' : ''}
    ${inputClassName}
  `;

  return (
    <div className={containerClasses}>
      {label && (
        <label className="block text-sm font-medium text-gray-800 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {leftIcon}
          </div>
        )}
        <input className={inputClasses} {...props} />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;