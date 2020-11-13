import React from "react";

const Button = ({ className, text, type, setUser }) => {
  const handleClick = () => {
    if (setUser) {
      setUser(null);
    }
  };
  return (
    <button
      className={className}
      type={type ? type : null}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
