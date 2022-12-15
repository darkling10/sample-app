import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h2: "font-bold text-[18px]",
  h3: "font-normal text-[16px]",
  h4: "text-[14px]",
  h5: "font-semibold text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
