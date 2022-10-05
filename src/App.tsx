import "./global.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, MyInfoPage, QuestionPage, FriendPage } from "./pages";
import Tabbar from "./component/common/tabbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/my" element={<MyInfoPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/friend" element={<FriendPage />} />
        </Routes>
        <Tabbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
