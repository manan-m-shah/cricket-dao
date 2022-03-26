import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pathsAndComponents } from "../../App";

const SideBar: FC = () => {
  let navigate = useNavigate();
  return (
    <aside>
      <ul>
        {pathsAndComponents.map((elm, index) => {
          return (
            <li key={index} onClick={() => navigate(elm.path)}>
              {/* {elm.icon} */}
              {elm.path}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
