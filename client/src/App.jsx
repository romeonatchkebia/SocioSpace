import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import SharedLayout from "./pages/sharedLayout";

const App = () => {
  const mode = useSelector((state) => state.mode);

  useEffect(() => {
    if (mode === "dark") {
      window.document.documentElement.classList.add("dark");
    }
    window.document.documentElement.classList.remove("dark");
  }, [mode]);

  return (
    <div className={mode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="home" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
