import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout.tsx";
import TaskDetails from "./components/TaskDetails/TaskDetails.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>{" "}
        <Route path="/task/:taskId" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
