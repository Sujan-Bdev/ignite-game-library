
import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import * as path from "./path";

const Home = lazy(()=> import('views/Home'))

function Router(){
    return(
        <>
        <Switch>
            <Route exact path = {path.HOME} component = {Home} />
        </Switch>
        </>
    )
}


export default Router;