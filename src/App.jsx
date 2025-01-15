import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Recipies from "./components/Recipies/Recipies";
import Header from "./components/Header/Header";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/menu",
      element: (
        <>
          <Header />
          <Menu />
        </>
      ),
    },
    {
      path: "/recipes",
      element: (
        <>
          <Header />
          <Recipies />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
