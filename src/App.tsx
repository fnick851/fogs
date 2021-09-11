import React from "react"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useCss } from "kremling"
import CustomFog1 from "./CustomFog1"
import Default from "./default-view/Default"

function App() {
  const cssScope = useCss(css)

  return (
    <Router>
      <div {...cssScope} className="root-container">
        <ul className="navigation">
          <li>
            <Link to="/">default</Link>
          </li>
          <li>
            <Link to="/custom-fog-1">custom-fog-1</Link>
          </li>
        </ul>

        <div className="scene">
          <Switch>
            <Route exact path="/">
              <Default />
            </Route>
            <Route path="/custom-fog-1">
              <CustomFog1 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

const css = /*css*/ `
* {
  margin: 0;
  padding: 0;
}

& .root-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

& .navigation {
  background-color: lightgrey;
}

& .navigation li {
  display: inline-block;
  margin: 5px;
}

& .scene {
  flex: 1;
}
`

export default App
