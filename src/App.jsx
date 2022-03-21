import React from 'react';
import MainPage from './routecomponents/MainPage';
import WelcomePage from './routecomponents/WelcomePage';

import './css/normalize.css';
import './css/style.css';
import './css/desktop-style.css';

export default function App(){
    const [start, setStart] = React.useState(false);
    const [myDeck, setMyDeck] =  React.useState("");
    return ( !start ?
        <WelcomePage setStart={setStart} setMyDeck={setMyDeck}/> : 
        <MainPage myDeck={myDeck}/>
    );
}