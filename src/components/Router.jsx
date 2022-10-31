import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import ItemsPage from "./ItemsList";
import UserSearchPage from "./pages/UserSearchPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<UserSearchPage />} />
          <Route path="/categories/:userId" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
