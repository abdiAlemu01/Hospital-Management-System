import { useState, forwardRef } from "react";

/**
 * Reusable Input Field Component
 * Features: Floating labels, password toggle, error states, accessibility
 */
const InputField = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      value,
      onChange,
      error,
      required = false,
      autoComplete,
      disabled = false,
      placeholder = " ",
      className = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;
    const hasValue = value && value.length > 0;


    return (
      <div className={`relative ${className}`}>
        {/* Input Field */}
        <input
          ref={ref}
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete={autoComplete}
          disabled={disabled}
          placeholder={placeholder}
          className={`
            peer w-full px-4 py-3.5 border rounded-xl bg-white
            text-gray-900 placeholder-transparent
            transition-all duration-200 ease-out
            focus:outline-none focus:ring-2 focus:ring-offset-0
            ${type === "password" ? "pr-12" : "pr-4"}
            ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300"
            }
            ${disabled ? "bg-gray-50 cursor-not-allowed opacity-60" : ""}
          `}
          {...props}
        />

        {/* Hide label when user types */}
        {!hasValue && (
          <label
            htmlFor={name}
            className={`
              absolute left-4 transition-all duration-200 ease-out pointer-events-none
              ${
                isFocused
                  ? "top-2 text-xs font-medium"
                  : "top-1/2 -translate-y-1/2 text-sm"
              }
              ${
                error
                  ? "text-red-600"
                  : isFocused
                  ? "text-blue-600"
                  : "text-gray-500"
              }
            `}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Show/Hide Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
