// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCreator from "./components/CharacterCreator";
import CharacterDetailPage from "./pages/CharacterDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
        <Route path="/create" element={<CharacterCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
