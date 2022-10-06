import "./global.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MainPage, MyInfoPage, QuestionPage, FriendPage } from "./pages";
import Tabbar from "./component/common/tabbar";
import AuthPage from "./pages/page/AuthPage";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const getPath = () => {
    setUrl(window.location.pathname);
  };
  useEffect(() => {
    getPath();
  }, [window.location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/my" element={<MyInfoPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/friend" element={<FriendPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        {url !== "/auth" && <Tabbar />}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
