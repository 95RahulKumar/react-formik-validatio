import React from "react";
import styles from "./radiobtn.module.css";
const RadioGroup = ({ lable, options, type, checked, onChangeHandeler }) => {
  console.log(checked);
  return (
    <>
      <div className="flex item-center">
        {lable && <p className="flex text-center mt-1 mr-5 mb-2">{lable}</p>}
        <div>
          {options.map((option) => (
            <label key={option.value}>
              <div className={`mt-2 ${styles.container}`}>
                <input
                  type={type}
                  value={option.value}
                  name={option.name} // Use a common name for all radio buttons in the group
                  checked={checked === option.value}
                  onChange={onChangeHandeler}
                  disabled={option.disabled}
                  className={`${styles.checkmark}`}
                />
                {option.label}
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default RadioGroup;
