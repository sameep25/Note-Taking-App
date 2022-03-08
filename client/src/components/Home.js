import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";

// componenets
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import Archives from "./archives/Archives";
import DeleteNotes from "./delete/DeleteNotes"


export default function Home() {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  );
}
