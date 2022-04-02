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
  {
    path: "new-proposal",
    component: <NewProposal />,
  },
  {
    path: "team",
    component: <Team />,
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
