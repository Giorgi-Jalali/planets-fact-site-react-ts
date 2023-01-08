import { useState, createContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

import useWindowWidth from "./customHook/useWindowWidth";
import Root from "./pages/Root";

type Context = {
  internalPage: string;
  setInternalPage: React.Dispatch<React.SetStateAction<string>>;
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  windowSize: number | undefined;
};

export const MyContext = createContext<Context | null>(null);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Mercury />} />
      <Route path="venus" element={<Venus />} />
      <Route path="earth" element={<Earth />} />
      <Route path="mars" element={<Mars />} />
      <Route path="jupiter" element={<Jupiter />} />
      <Route path="saturn" element={<Saturn />} />
      <Route path="uranus" element={<Uranus />} />
      <Route path="neptune" element={<Neptune />} />
    </Route>
  )
);

const App = () => {
  const [internalPage, setInternalPage] = useState("overview");
  const [mobileNavbar, setMobileNavbar] = useState(true);
  const [page, setPage] = useState("/");
  const windowSize = useWindowWidth();

  return (
    <MyContext.Provider
      value={{
        internalPage,
        setInternalPage,
        mobileNavbar,
        setMobileNavbar,
        page,
        setPage,
        windowSize,
      }}
    >
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;
