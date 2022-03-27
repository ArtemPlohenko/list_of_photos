import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AlbumsPage from "./AlbumsPage";
import AlbumPage from "./AlbumPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AlbumsPage />} />
        <Route path="albums" element={<AlbumsPage />} />
        <Route path="albums/:id" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
