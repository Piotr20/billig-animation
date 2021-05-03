import React, { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/Ri";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import LogoBlack from "../Logo-black";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpMenu {
        nodes {
          name
          id
          menuItems {
            nodes {
              id
              label
              url
              order
            }
          }
          slug
        }
      }
    }
  `);
  console.log(data);
  const danskMenu = data.allWpMenu.nodes[0].menuItems.nodes;
  console.log(danskMenu);
  return (
    <header className="w-full h-20 px-8 lg:px-10 2xl:px-12 flex  items-center justify-between">
      <nav className=" flex items-center justify-between w-full h-full">
        <Link to="/">
          <LogoBlack />
        </Link>
        <ul className="hidden md:flex">
          {danskMenu.map((menuItem, key) => {
            return menuItem.order < 4 ? (
              <Link to={menuItem.url}>
                <li className="md:text-lg 2xl:text-2xl px-4" key={key}>
                  {menuItem.label}
                </li>
              </Link>
            ) : (
              ""
            );
          })}
        </ul>
        <ul className="hidden md:flex">
          {danskMenu.map((menuItem, key) => {
            return menuItem.order > 3 ? (
              <Link to={menuItem.url}>
                <li className="md:text-lg 2xl:text-2xl px-4" key={key}>
                  {menuItem.label}
                </li>
              </Link>
            ) : (
              ""
            );
          })}
        </ul>
        <button className="md:hidden" onClick={() => setShowNav(!showNav)}>
          <RiMenuFill className="text-3xl " />
        </button>
      </nav>
      <div
        className={`h-screen md:hidden w-full bg-black fixed flex flex-col justify-between items-center transition-all duration-300 ${
          showNav === true ? `inset-0` : `top-0 left-full`
        }`}
      >
        <button className=" self-end" onClick={() => setShowNav(!showNav)}>
          <RiCloseFill className="text-5xl mr-4 mt-4 text-white" />
        </button>
        <ul className=" text-center text-3xl -mt-8">
          {danskMenu.map((menuItem, key) => {
            return (
              <Link to={menuItem.url}>
                <li
                  className={`md:text-lg 2xl:text-2xl text-white py-5  ${
                    menuItem.order < 5 ? `curtain-item-mobile` : ``
                  }`}
                  key={key}
                >
                  {menuItem.label}
                </li>
              </Link>
            );
          })}
        </ul>
        <div>
          <h3 className="md:text-lg pb-12 text-white text-center">
            Billig Animation © 2021
          </h3>
        </div>
      </div>
    </header>
  );
};
export default Header;
