import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewLogin from "./pages/new_login";
import NewLend from "./pages/new_lend";
import NoPage from "./pages/NoPage";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<NewLogin />} />
          <Route path="/new_login" element={<NewLogin />} />
          <Route path="/new_lend" element={<NewLend />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
