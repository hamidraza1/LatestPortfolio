import React from "react";

const card = (props) => {
  const imageUrl = require(`${props.images[0]}`);
  return (
    <div className="p-1 bg-white rounded-lg shadow-md flex-shrink-0 w-64 m-2">
      <a
        href="https://zarghamkhandev.github.io/Werkcation-Real-Estate/"
        target="_blank"
      >
        <img
          src={imageUrl}
          alt="project1"
          className="rounded w-full object-cover"
        ></img>
      </a>
    </div>
  );
};

export default card;
