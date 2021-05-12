import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const FooterNav = () => {
  const navMenuQuery = useStaticQuery(graphql`
    query MenuQuery {
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

  const danskMenu = navMenuQuery.allWpMenu.nodes[0].menuItems.nodes;
  console.log("menu", danskMenu);
  return (
    <div>
      <h2>Links</h2>
      <ul className="list-disc list-inside grid grid-cols-2 md:gap-2 md:gap-x-8 xl:gap-x-12 md:pt-4 xl:pt-4">
        {danskMenu.map((menuItem, key) => {
          return (
            <Link
              className="hover:underline"
              key={menuItem.id}
              to={menuItem.url}
            >
              <li className="text-lg md:text-xl xl:text-2xl">
                {menuItem.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterNav;
