import React from "react";
import MenuItems from "./MenuItems";

const depthLevel = 0;

const Menu = ({ menu }) => {
  return (
    <div className="menu-card">
      <ul className="menus">
        {menu.map((items, index) => {
          return (
            <MenuItems items={items} key={index} depthLevel={depthLevel} />
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
