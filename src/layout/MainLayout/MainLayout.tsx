import { Outlet } from "react-router-dom";
import { Header } from "../../components/ui/Header";
import { Footer } from "../../components/ui/Footer";
import { Container } from "../../components/common/Container";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen gap-7">
      <Header className="flex-shrink-0" />
      <Container className="flex-grow">
        <Outlet />
      </Container>
      <Footer className="flex-shrink-0" />
    </div>
  );
};
