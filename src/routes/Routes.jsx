import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import ChatPage from "../pages/ChatPage.jsx";

export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chat/:user" element={<ChatPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
