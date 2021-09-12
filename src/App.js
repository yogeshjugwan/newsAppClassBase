import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
 const pageSize = 9;
 const apikey = process.env.REACT_APP_NEWS_API;
 const [prograss, setPrograss] = useState(0)

  return (
    <Router>
      <NavBar brand={"NewsApp"} />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={prograss}
      />
      <Switch>
        <Route exact path="/"><News setProgress={setPrograss} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
        <Route exact path="/business"><News setProgress={setPrograss} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
        <Route exact path="/entertainment"><News setProgress={setPrograss} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
        <Route exact path="/health"><News setProgress={setPrograss} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
        <Route exact path="/science"><News setProgress={setPrograss} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
        <Route exact path="/sports"><News setProgress={setPrograss} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
        <Route exact path="/technology"><News setProgress={setPrograss} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
      </Switch>
    </Router>
  )
}
export default App