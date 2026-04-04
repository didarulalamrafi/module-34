import React, { useState } from "react";
import Links from "./Links";
import { Menu, X } from "lucide-react";

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
  const [opne, setOpne] = useState(false);
  const navLinks = links.map((route) => (
    <Links route={route} key={route.id}></Links>
  ));
  return (
    <nav className="flex gap-5 justify-between mx-auto w-11/12 my-4">
      <span className="flex gap-3 md:hidden">
        <span onClick={() => setOpne(!opne)}>
          {opne ? <X></X> : <Menu></Menu>}
          <ul className={`md:hidden absolute duration-1000 p-2  rounded-xl
             bg-red-600 
             ${opne? 'top-14': '-top-60'}`}>
            {
              navLinks
            }
            </ul>
        </span>
      </span>
      <h3>Logo</h3>
      <ul className="hidden md:flex gap-5">{navLinks}</ul>
      <button>Sign in</button>
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
