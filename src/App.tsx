import React from "react";
import "./global.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import FriendPage from "./pages/FriendPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import QuestionPage from "./pages/QuestionPage";
import Tabbar from "./component/common/tabbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/friend" element={<FriendPage />} />
        </Routes>
        <Tabbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
