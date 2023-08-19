import Home from "./Home";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Collab Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
