import React from 'react';

const PrimaryButton = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = true,
  type = "button"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${fullWidth ? 'w-full' : ''}
        px-4 py-3 text-white font-semibold
        rounded-full
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50
        disabled:opacity-60 disabled:cursor-not-allowed
        hover:-translate-y-0.5 hover:shadow-xl
        active:translate-y-0 active:shadow-md
      `}
      style={{
        background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
        boxShadow: disabled || loading
          ? 'none'
          : '0 4px 18px rgba(220, 38, 38, 0.45)',
      }}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Please wait...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default PrimaryButton;
