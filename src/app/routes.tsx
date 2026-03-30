import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { PortfolioModelos } from "./components/PortfolioModelos";
import { PortfolioCenarios } from "./components/PortfolioCenarios";
import { PortfolioJogos } from "./components/PortfolioJogos";
import { PortfolioMultimedia } from "./components/PortfolioMultimedia";
import { Servicos } from "./components/Servicos";
import { Contacto } from "./components/Contacto";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/modelos", Component: PortfolioModelos },
      { path: "portfolio/cenarios", Component: PortfolioCenarios },
      { path: "portfolio/jogos", Component: PortfolioJogos },
      { path: "portfolio/multimedia", Component: PortfolioMultimedia },
      { path: "servicos", Component: Servicos },
      { path: "contacto", Component: Contacto },
      { path: "*", Component: NotFound },
    ],
  },
]);
