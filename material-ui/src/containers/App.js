import Button from "@material-ui/core/Button";
import React from "react";
import Header from "../components/ui/Header";

function App() {
  return (
    <div>
      <Header />
      <Button variant="contained">Hello World</Button>

      {
        [...new Array(1200)].map(() => 'alsdlasjdlajdald jlajd lajd ajdaljdaadads').join('\n')
      }
    </div>
  );
}

export default App;
