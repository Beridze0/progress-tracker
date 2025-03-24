import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProgressPage from "./pages/ProgressPage";
import Quests from "./pages/Quests";

const App = () => {
  return (
      <Router>
          <Routes>
            <Route path="/" element={ <Layout />}>
              <Route index element={ <HomePage /> } />
              <Route path="/progress" element={ <ProgressPage /> } />
              <Route path="/quests" element={<Quests />} />
            </Route>
          </Routes>
      </Router>
      );
    
}

export default App