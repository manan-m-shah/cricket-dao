import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {
  Enacted,
  Proposals,
  Tickets,
  Tokens,
  NewProposal,
  Team,
} from "./pages/MainComponents";
import MainLayout from "./pages/MainLayout";
import NotFound from "./pages/NotFound";

type IPathsAndComponents = {
  path: string;
  name?: string;
  component: JSX.Element;
  isShownInSidebar: boolean;
  // icon: JSX.Element;
}[];

export const pathsAndComponents: IPathsAndComponents = [
  {
    path: "/",
    name: "home",
    component: <></>,
    isShownInSidebar: true,
  },
  {
    path: "tickets",
    component: <Tickets />,
    isShownInSidebar: true,
  },
  {
    path: "proposals",
    component: <Proposals />,
    isShownInSidebar: true,
  },
  {
    path: "enacted",
    component: <Enacted />,
    isShownInSidebar: true,
  },
  {
    path: "tokens",
    component: <Tokens />,
    isShownInSidebar: true,
  },
  {
    path: "new-proposal",
    component: <NewProposal />,
    isShownInSidebar: true,
  },
  {
    path: "team",
    component: <Team />,
    isShownInSidebar: true,
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
        <Route index element={<LandingPage />} />
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
