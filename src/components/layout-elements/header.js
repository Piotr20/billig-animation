import React, { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/Ri";
import { graphql, useStaticQuery, Link } from "gatsby";
import Logo from "../Logo";
import ShapeGroup from "../shapeGroup";

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

  const danskMenu = data.allWpMenu.nodes[0].menuItems.nodes;

  return (
    <header className="w-full h-20 px-8 lg:px-10 2xl:px-24 flex items-center justify-between shadow-md fixed top-0 left-0 z-50 bg-white">
      <nav className=" flex items-center justify-between w-full h-full">
        <Link className={`w-28 h-12 md:w-36 `} to="/">
          <Logo type="black" />
        </Link>

        <ul className="hidden md:flex font-semibold">
          {danskMenu.map((menuItem, key) => {
            return (
              <Link
                key={menuItem.id}
                className={` text-black py-2${
                  menuItem.order === 5
                    ? ` bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl md:rounded-3xl xl:rounded-4xl py-2 px-1 shadow-custom`
                    : ``
                }`}
                to={menuItem.url}
              >
                <li className="md:text-lg 2xl:text-xl md:px-6 2xl:px-8 md:mx-1 xl:mx-2">
                  {menuItem.label}
                </li>
              </Link>
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
        <ul className=" text-center text-3xl -mt-8 font-semibold ">
          {danskMenu.map((menuItem, key) => {
            return (
              <Link key={menuItem.id} to={menuItem.url}>
                <li
                  className={`md:text-lg 2xl:text-xl text-white py-5  ${
                    menuItem.order < 5 ? `curtain-item-mobile` : ``
                  }`}
                >
                  {menuItem.label}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="flex flex-col items-center">
          <ShapeGroup />
          <h3 className="md:text-lg pb-12 text-white text-center">
            Billig Animation © 2021
          </h3>
        </div>
      </div>
    </header>
  );
};
export default Header;
