import { useState } from "react";

const Button = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "darkblue" : "royalblue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    width: "100%",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;
