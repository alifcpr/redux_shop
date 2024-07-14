import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const MainLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
