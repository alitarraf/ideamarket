const Input = ({
  id,
  title,
  placeholder,
  name,
  type,
  value,
  onChange,
  required,
}) => {
  if (required === undefined) required = false;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="shadow-sm py-1 px-2 border-2 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
