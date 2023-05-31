import "./App.css";

import Layout from "./components/Layout";

// importing pages
import CreateAppointment from "./Pages/CreateAppointment";
import ActiveAppointment from "./Pages/ActiveAppointment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="createappointment" element={<CreateAppointment />} />
          <Route path="activeappointment" element={<ActiveAppointment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
