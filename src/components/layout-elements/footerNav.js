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
  //Footer links
  const danskMenu = navMenuQuery.allWpMenu.nodes[0].menuItems.nodes;
  return (
    <div>
      <h2 className="text-white">Links</h2>
      <ul className="list-disc list-inside grid grid-cols-2 md:gap-2 md:gap-x-8 xl:gap-x-12 md:pt-4 xl:pt-4">
        {danskMenu.map((menuItem, key) => {
          return (
            <li key={key} className="text-lg md:text-xl xl:text-2xl">
              <Link
                className="hover:underline"
                key={menuItem.id}
                to={menuItem.url}
              >
                {menuItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterNav;
