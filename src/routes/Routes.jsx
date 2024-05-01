import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import GroupPage from "../pages/GroupPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";
import ChatPage from "../pages/ChatPage.jsx";

export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chat/:user" element={<ChatPage />} />
        <Route path="profile/:user" element={<HomePage />} />
        <Route path="group" element={<GroupPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
