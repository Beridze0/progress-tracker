import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProgressPage from "./pages/ProgressPage";

const App = () => {
  return (
      <Router>
          <Routes>
            <Route path="/" element={ <Layout />}>
              <Route index element={ <HomePage /> } />
              <Route path="/progress" element={ <ProgressPage /> } />
            </Route>
          </Routes>
      </Router>
      );
    
}

export default App