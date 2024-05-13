const Select = (name, value, onSelectHandler, ...selectOptions) => {
  console.log(selectOptions);
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        name={name}
        value={value}
        onChange={onSelectHandler}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {selectOptions?.map((option) => {
          <option value={option}>
            {option == "" ? "Select country" : option}
          </option>;
        })}
      </select>
    </>
  );
};

export default Select;
