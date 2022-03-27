import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import {
  Enacted,
  Proposals,
  Tickets,
  Tokens,
  Transparency,
} from "./pages/MainComponents";
import MainLayout from "./pages/MainLayout";
import NotFound from "./pages/NotFound";

type IPathsAndComponents = {
  path: string;
  component: JSX.Element;
  // icon: JSX.Element;
}[];

export const pathsAndComponents: IPathsAndComponents = [
  {
    path: "tickets",
    component: <Tickets />,
  },
  {
    path: "proposals",
    component: <Proposals />,
  },
  {
    path: "enacted",
    component: <Enacted />,
  },
  {
    path: "tokens",
    component: <Tokens />,
  },
  // {
  //   path: "transparency",
  //   component: <Transparency />,
  //   icon: <ConfirmationNumberRoundedIcon />,
  // },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<MainLayout />}>
          {pathsAndComponents.map((elm, index) => {
            return (
              <Route path={elm.path} key={index} element={elm.component} />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
