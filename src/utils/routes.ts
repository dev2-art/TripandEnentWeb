import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Portfolio } from "../pages/Portfolio";
import { WhyChoose } from "../pages/WhyChoose";
import { Contact } from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      { path: "why-choose-us", Component: WhyChoose },
      { path: "contact", Component: Contact },
    ],
  },
]);
