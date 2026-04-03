import React from "react";
import Links from "./Links";

const links = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavbarCoustom = () => {
  return (
    <nav>
      <ul className="flex gap-[20px] justify-between mx-auto w-11/12 my-4">
        {links.map((route) => (
          <Links route={route}></Links>
        ))}
      </ul>
    </nav>

    // <ul className="flex gap-[20px] justify-between mx-auto w-11/12 my-4">
    //   {links.map((route) => (
    //     <li>
    //       <a href={route.path}>{route.name}</a>
    //     </li>
    //   ))}
    // </ul>

    // <nav>
    //   <ul className="flex gap-[20px] justify-between mx-auto w-11/12 my-4">
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/">About us</a>
    //     </li>
    //     <li>
    //       <a href="/">Blog</a>
    //     </li>
    //     <li>
    //       <a href="/">Contact</a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavbarCoustom;
