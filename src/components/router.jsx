import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Login from "../pages/login";
import Admin from "../pages/admin";
import User from "../pages/user";
import NewPoll from "../pages/new-poll";
import EditPoll from "../pages/edit-poll";

export default () => (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path = "/user" component = {User} />
      <Route path = "/new-poll" component = {NewPoll} />
      <Route path = "/edit-poll" component = {EditPoll} />
    </Switch>
);
