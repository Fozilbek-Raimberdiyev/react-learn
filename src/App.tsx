import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import SingleProduct from "./pages/SingleProduct";
import HeaderLayout from "./layouts/header";
import Users from "./pages/users";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderLayout></HeaderLayout>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="products" element={<Products></Products>}></Route>
      <Route
        path="products/:id"
        element={<SingleProduct></SingleProduct>}
      ></Route>
      <Route path="users" element={<Users></Users>}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
