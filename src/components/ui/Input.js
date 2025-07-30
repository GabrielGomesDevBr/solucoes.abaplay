import React from 'react';

const Input = React.forwardRef(({ label, name, type = 'text', error, ...rest }, ref) => {
  return (
    <div>
      {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        ref={ref}
        className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
});

export default Input;
