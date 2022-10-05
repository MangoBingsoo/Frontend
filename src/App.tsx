import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FriendPage from "./pages/FriendPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/friend" element={<FriendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
