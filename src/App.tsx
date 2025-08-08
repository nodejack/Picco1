import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Weekly from "./pages/Weekly";
import Daily from "./pages/Daily";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/daily" element={<Daily />} />
      </Routes>
    </Router>
  );
}

export default App;