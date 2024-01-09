import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home.js";
import Auth from "./pages/Auth";
import CreateRecipe from "./pages/CreateRecipe.js";
import SavedRecipe from "./pages/SavedRecipe.js";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes> 
           <Route path="/" elements={<Home />}/>
           <Route path="/Auth" elements={<Auth />}/> 
           <Route path="/CreateRecipe" elements={<CreateRecipe />}/>
           <Route path="/SavedRecipe" elements={<SavedRecipe />}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
