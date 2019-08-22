import React from "react";
import LoginPage from "./login/login-page";
import ProductPage from "./product/product-page";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./home";

export default class Routes extends React.Component {

    render = () =>
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                {/*<Route path="/" component={protectedComponent(Base)}/>*/}
                <Route path="/" component={Home} exact/>
                <Route path="/find" component={ProductPage}/>
                <Route render={() => <h2>Page not found</h2>}/>
            </Switch>
        </Router>;

}