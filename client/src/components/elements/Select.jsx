const Select = ({ id, title, name, placeholder, defaultValue, options }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <select
        id={id}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-1 text-base border-2 border-gray-300 focus:outline-none sm:text-sm rounded-md"
        defaultValue={defaultValue}
      >
        <option defaultValue>{placeholder}</option>
        {options.map((option, id) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
