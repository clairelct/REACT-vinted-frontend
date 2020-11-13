import React from "react";

const DisplayUser = ({ src, alt, username }) => {
  return (
    <div className="display-user">
      <img src={src} alt={alt} />
      <span>{username}</span>
    </div>
  );
};

export default DisplayUser;
