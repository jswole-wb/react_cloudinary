import {
    BrowserRouter as Router,
    Route,
    Routes 
     } from "react-router-dom";


  import Home from "./components/Home";
  import ReSize from "./components/ReSize";
  import WaterMark from "./components/WaterMark";


export const Routes = () => {

return(
    <Router>
    <Routes >

        <Route
            exact
            path="/"
            element={<Home />}
        />

        
        <Route
            path="/ReSize"
            element={<ReSize />}
        />
           <Route
            path="/WaterMark"
            element={<WaterMark />}
        />

      
        
        
        
    </Routes>
</Router>
)

    
}