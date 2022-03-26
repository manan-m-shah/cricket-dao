import { FC } from "react";
import { Link } from "react-router-dom";
import { pathsAndComponents } from "../../App";

const SideBar: FC = () => {
  return (
    <aside>
      {pathsAndComponents.map((elm, index) => {
        return (
          <Link key={index} to={elm.path}>
            {elm.path}
          </Link>
        );
      })}
    </aside>
  );
};

export default SideBar;
