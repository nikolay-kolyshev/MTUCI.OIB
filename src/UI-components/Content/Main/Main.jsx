import React from "react"
import {MainStyled} from "./styled"
import {Redirect, Route} from "react-router-dom"
import GeneratorPasswords from "../../labs/GeneratorPasswords/GeneratorPasswords";
import MarkPassword from "../../labs/MarkPassword/MarkPassword";
import Hash from "../../labs/Hash/Hash";
import AuthLab from "../../labs/auth/AuthLab";
import ONas from "../../labs/About/About";
import Reports from "../../labs/reports/Reports";

const Main = () => {

    return (
        <MainStyled offset={0}>
            <Route exact path = "/">
                <Redirect to="/generator_password"/>
            </Route>
            <Route exact path = "/generator_password">
                <GeneratorPasswords/>
            </Route>
            <Route exact path = "/auth">
                <AuthLab/>
            </Route>
            <Route exact path = "/mark_password">
                <MarkPassword/>
            </Route>
            <Route exact path = "/hash">
                <Hash/>
            </Route>
            <Route exact path = "/about">
                <ONas/>
            </Route>
            <Route exact path = "/reports">
                <Reports/>
            </Route>
        </MainStyled>
    )
}

export default Main
