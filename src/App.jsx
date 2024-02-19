import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Indice from "./pages/Hospitales";
import Info from "./pages/info";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Triage from "./pages/Triage";
// rama mati
function App() {
  return (
    <>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitales" element={<Indice />} />
          <Route path="/info" element={<Info />} />
          <Route path="/Triage" element={<Triage />} />
        </Routes>
      </Main>

      <Footer />
    </>
  );
}
export default App;
