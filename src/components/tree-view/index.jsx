// import MenuList from "./menu-list";
// import './styles.css';

// export default function TreeView({menus = []}){
//     return <div className="tree-view-container">
//         <MenuList list={menus}/>
//     </div>

// }

import { useState } from "react";
import menus from "./data.js";

export default function TreeViwe({ menus }) {

  const[displayCurrentChildren,setDisplayCurrentChildren]=useState({})

 function handleShowChildren(getCurrnetLable){
  setDisplayCurrentChildren({
    ...displayCurrentChildren,
    [getCurrnetLable]: !displayCurrentChildren[getCurrnetLable],
  });
 }
  return (
    <>
      {menus.map((item, index) => (
        <ul key={index}>
          <li>{item.label}</li>
          {item.children && item.children.length > 0 && (
              <span onClick={() => handleShowChildren(item.label)}>
                {displayCurrentChildren[item.label] ? " -" : " +"}
              </span>
            )}
          <ul>
            {item.children &&
              item.children.length > 0 && displayCurrentChildren[item.label] ?
              <TreeViwe menus={item.children}/>
            :null}
          </ul>
        </ul>
      ))}
    </>
  );
}
