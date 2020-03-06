import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
   constructor(props) {
      super(props);
      this.registerHandler = this.registerHandler.bind(this);
      this.loginHandler = this.loginHandler.bind(this);
      this.state = {
         login: true,
         reg: false
      };
   }

   registerHandler() {
      this.setState({
         login: false,
         reg: true
      });
   }
   loginHandler() {
      this.setState({
         login: true,
         reg: false
      });
   }

   render() {
      var current;
      let login = this.state.login;
      let reg = this.state.reg;

      if (login) current = <Login registerHandler={this.registerHandler} />;
      else if (reg) {
         current = <Register loginHandler={this.loginHandler} />;
      }
      return (
         // <Router>
         //    <div>
         //       <div className="App" className="login">
         //          Reading Tracker
         //       </div>
         //       <Login></Login>
         //       <Switch>
         //          <Route component={Login.js} />
         //          <Route path="/register" component={Register.js} />
         //       </Switch>
         //    </div>
         // </Router>
         <div>{current}</div>
      );
   }
}

export default App;
