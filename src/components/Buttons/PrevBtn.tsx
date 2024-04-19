import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PrevBtn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button className="prev-btn buttons" onClick={() => navigate("/")}>
      <IoArrowBackSharp />
    </button>
  );
};

export default PrevBtn;
