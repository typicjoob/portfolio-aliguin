"use client";
import React from "react";
import NavLink from "./NavigationLink";

const MenuBar = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {links.map((link, index) => (
        <li key={index} className="w-full text-center">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuBar;
