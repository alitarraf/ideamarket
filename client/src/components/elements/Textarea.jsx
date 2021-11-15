const Textarea = ({ id, title, placeholder, name, rows }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1">
        <textarea
          name={name}
          id={id}
          rows={rows}
          className="shadow-sm p-2 block w-full sm:text-sm border-2 border-gray-300 rounded-md resize-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Textarea;
