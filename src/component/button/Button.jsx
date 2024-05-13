import { React, forwardRef } from "react";

const Button = forwardRef(
  ({ children, type, onClickHandeler, classname = "", ...props }, ref) => {
    return (
      <>
        <button
          type={type}
          className={`${classname} align-middle`}
          onClick={onClickHandeler}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </>
    );
  }
);
export default Button;
