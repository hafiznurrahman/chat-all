import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import Homepage from "../pages/Homepage.jsx";

export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
