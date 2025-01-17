import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Recipies from "./components/Recipies/Recipies";
import RecipiePage from "./components/Recipies/RecipiePage";
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
      children: [
        {
          path: ":id",
          element: <RecipiePage />,
        },
      ],
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
