// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCreator from "./components/CharacterCreator";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreateNewUserPage from "./pages/CreateNewUserPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/aaaa" element={<CharacterList />} /> */}
        <Route path="/newuser" element={<CreateNewUserPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
        <Route path="/create" element={<CharacterCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
