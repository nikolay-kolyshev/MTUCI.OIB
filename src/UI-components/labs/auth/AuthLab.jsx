import React, {useState} from 'react';
import AuthScreen from "./AuthScreen";
import UserView from "./UserView";
import PassChange from "./PassChange";

export default function (props){

    const [screen, setScreen] = useState("auth");

    return <section>
        {screen === 'auth' && <AuthScreen setScreen={setScreen}/>}
        {screen === 'user' && <UserView setScreen={setScreen}/>}
        {screen === 'pass' && <PassChange setScreen={setScreen}/>}
    </section>


}