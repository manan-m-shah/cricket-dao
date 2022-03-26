import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar, Footer } from "./LayoutComponents";

const MainLayout: FC = () => {
  return (
    <main>
      <Navbar />
      <div className="content">
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
