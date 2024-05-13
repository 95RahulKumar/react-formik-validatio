import { React, forwardRef } from "react";

const Input = forwardRef(
  (
    {
      lable,
      placeholder,
      type = "text",
      classname = "",
      onChangeHandeler,
      name,
      inputVal,
      onBlurHandeler,
    },
    ref
  ) => {
    return (
      <>
        <div className="flex mt-2 items-center justify-between">
          {lable && <span className="mr-2">{lable}</span>}
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandeler}
            name={name}
            onBlur={onBlurHandeler}
            className={`${classname}`}
            value={inputVal}
            ref={ref}
          ></input>
        </div>
      </>
    );
  }
);

export default Input;
