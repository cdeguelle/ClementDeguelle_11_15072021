import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Location from "./pages/Location"
import Results from "./pages/Results"
import Freelances from "./pages/Freelances"
import Header from "./components/Header"
import Footer from './components/Footer'
import Error from "./components/Error"
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/location/locationID=:id">
                    <Location />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
                <Route path="/freelances">
                    <Freelances />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
