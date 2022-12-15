import React from "react";
import PropTypes from "prop-types";

const variants = { icbOutlineGray900: "border border-gray_900 border-solid" };
const sizes = { smIcn: "sm:p-[2px] md:p-[3px] p-[5px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["icbOutlineGray900"]),
  size: PropTypes.oneOf(["smIcn"]),
};
Button.defaultProps = {
  className: "",
  variant: "icbOutlineGray900",
  size: "smIcn",
};

export { Button };
