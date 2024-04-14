import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/ui/Header";
import { Footer } from "../../components/ui/Footer";
import { Container } from "../../components/common/Container";
import { ErrorBoundary } from "../../components/common/ErrorBoundary/ErrorBoundary.tsx";

export const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen gap-7">
      <Header className="flex-shrink-0" />
      <Container className="flex-grow">
        <ErrorBoundary key={location.pathname}>
          <Outlet />
        </ErrorBoundary>
      </Container>
      <Footer className="flex-shrink-0" />
    </div>
  );
};
