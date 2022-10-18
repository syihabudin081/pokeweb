import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Landingpage from "./pages/landingpage";
import Pokedex from "./pages/pokedex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar/>
                <Landingpage/>
              </>
            }
          />
          <Route
            path="/pokedex"
            element={
              <>
                <Navbar/> 
                <Pokedex />
              </>
               
              
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <Pokedex/> */}
    </>
  );
}

export default App;
