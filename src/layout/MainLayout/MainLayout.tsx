import { Outlet } from "react-router-dom";
import { Header } from "../../components/ui/Header";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
