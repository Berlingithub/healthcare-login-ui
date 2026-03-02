import React, { useState } from 'react';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  required = false,
  error,
  icon,
  value,
  onChange,
  name,
  autoFocus = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePwd = () => {
    setShowPassword(prev => !prev);
  };

  const inputType =
    type === 'password'
      ? showPassword
        ? 'text'
        : 'password'
      : type;

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-medium mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          autoComplete="new-password"
          className={`w-full py-3 ${
            icon ? 'pl-10 pr-12' : 'px-4 pr-12'
          } border ${
            error
              ? 'border-red-400 bg-red-50'
              : 'border-gray-200 bg-gray-50'
          } rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300 focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400`}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={togglePwd}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
          >
            {showPassword ? (
             
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
           
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;