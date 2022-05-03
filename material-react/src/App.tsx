import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          MaterialUI Components
        </Typography>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Divider></Divider>
      </Box>
    </Container>
  );
}

export default App;
