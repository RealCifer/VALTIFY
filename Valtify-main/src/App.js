import DES from "./components/TripleDES";
import Home from "./components/Home";
import SHA256 from "./components/SHA256";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SHA512 from "./components/SHA512";
import RSA from "./components/RSA";
import AES from "./components/AES";
import Explore from "./components/Explore";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/home" element={<Home />} />
          <Route path="/DES" element={<DES />} />
          <Route path="/SHA256" element={<SHA256 />} />
          <Route path="/SHA512" element={<SHA512 />} />
          <Route path="/RSA" element={<RSA />} />
          <Route path="/AES" element={<AES />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
