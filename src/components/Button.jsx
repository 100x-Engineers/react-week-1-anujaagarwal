import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["default", "outline", "primary", "icon"]),
  type: PropTypes.oneOf(["primary", "secondary", "black"]),
  isDisabled: PropTypes.bool,
};

export default function Button(props) {
  const {
    children = "Add your Text",
    variant = "default",
    type,
    size = "lg",
    isDisabled = false,
    ...rest
  } = props;
  const baseStyle = "rounded-full font-bold";
  const variantStyles = {
    primary:
      "px-6 text-twitter-white-100 hover:bg-twitter-second gap-2 bg-twitter-blue",
    default:
      "px-6 py-1 text-neutral-1000 hover:bg-neutral-200 gap-2 text-neutral-1000 backdrop-blur-xl shadow-3xl hover:bg-neutral-200 bg-neutral-50",
    outline:
      "px-6 py-1 text-twitter-blue gap-2 backdrop-blur-xl border-stroke border border-solid bg-neutral-1000",
  };

  const sizeStyles = {
    sm: "text-sm h-7 w-28",
    md: "text-md h-7 w-56",
    lg: "text-lg h-9 w-85",
  }; // sm, md, lg

  const disabledStyles = isDisabled ? "cursor-not-allowed opacity-50" : "";

  const textStyles = {
    primary: "text-twitter-blue",
    secondary: "text-neutral-50",
    black: "text-neutral-1000",
  };

  const classes = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${textStyles[type]}`;
  return (
    <button
      className={classes}
      // onClick={}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
