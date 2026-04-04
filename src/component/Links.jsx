import React from "react";

const Links = ({ route }) => {
  return (
    <li className="hover:bg-green-500 rounded-xl p-1">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Links;
