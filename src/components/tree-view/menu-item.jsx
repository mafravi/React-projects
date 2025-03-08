import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleTaggleChlidren(getCurrnetLable) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrnetLable]: !displayCurrentChildren[getCurrnetLable],
    });
  }

  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleTaggleChlidren(item.label)}>
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
