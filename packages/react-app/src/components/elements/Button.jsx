import React, { Fragment } from "react";
import "./button.css";

/**
 * button component used at multiple locations
 * @param {*} children
 * @param {string} color red,yellow,blue,green,gray,diabled,warning
 * @param {*} size
 * @param {*} onClick
 * @param {*} outline
 * @param {*} disabled true,false
 * @param {*} width full,half,pill
 * @param {*} processing true, false
 * @returns
 */

const Button = ({
  children,
  color,
  size,
  onClick,
  disabled,
  width,
  processing,
  type,
}) => {
  switch (color) {
    case "red":
      color =
        "text-gray-100 hover:text-white bg-red-400 hover:bg-red-500 border border-transparent shadow-sm";
      break;
    case "yellow":
      color =
        "text-white bg-yellow-400 hover:bg-yellow-500 border border-transparent shadow-sm";
      break;
    case "blue":
      color =
        "text-white bg-indigo-600 hover:bg-indigo-700 border border-transparent shadow-sm";
      break;
    case "green":
      color =
        "text-white bg-green-500 hover:bg-green-600 border border-transparent shadow-sm";
      break;
    case "gray":
      color =
        "text-white bg-gray-400 hover:bg-gray-500 border border-transparent shadow-sm";
      break;
    case "diabled":
      color = "text-gray-100 bg-gray-400 border border-transparent shadow-sm";
      break;
    case "warning":
      color =
        "text-white bg-warning-400 hover:bg-warning-500 border border-transparent shadow-sm";
      break;
    case "none":
      color = "hover:bg-gray-200";
      break;
    default:
      color = "text-white bg-indigo-600 hover:bg-indigo-700";
  }
  switch (size) {
    case "xs":
      size = "text-xs";
      break;
    case "sm":
      size = "text-sm";
      break;
    case "md":
      size = "text-md";
      break;
    case "lg":
      size = "text-lg";
      break;
    case "xl":
      size = "text-xl";
      break;
    case "2xl":
      size = "text-2xl";
      break;
    default:
      size = "text-medium";
  }
  switch (width) {
    case "full":
      width = "w-full";
      break;
    case "half":
      width = "w-20";
      break;
    case "pill":
      width = "w-16";
      break;
    default:
      width = "w-40";
  }

  if (processing)
    return (
      <button
        className={`inline-flex justify-center cursor-not-allowed px-6 py-1 border border-transparent shadow-sm font-medium rounded-md text-grey-700 bg-blue-200 ${size} ${width}`}
        disabled
      >
        <span className="pr-2">Processing</span>
        <span className="spinner"></span>
      </button>
    );

  return (
    <Fragment>
      <button
        onClick={onClick}
        className={`relative justify-center inline-flex items-center px-2 py-1  rounded-md focus:outline-none font-medium ${color} ${size} ${width}`}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default Button;
