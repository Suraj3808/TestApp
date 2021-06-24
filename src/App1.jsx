import React from "react";
import Data from "./Data";
import UserSelect from "./UserSelect";
import { Switch, Route } from "react-router-dom";

const App1 = () => {

    return (
        <Switch>

            <Route exact  path="/" component={UserSelect} />
            <Route exact path="/data" component={Data} />

        </Switch>
    );
};
export default App1;