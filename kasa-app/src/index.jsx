import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Location1 from "./pages/Location1"
import About from "./pages/About"
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
                <Route path="/location/:locationId" component={Location1} />
                <Route path="/about">
                    <About />
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
