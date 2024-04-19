import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const ToTopBtn: React.FC = () => {
  return (
    <button
      className="toTop-btn buttons"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <IoArrowUpOutline />
    </button>
  );
};

export default ToTopBtn;
