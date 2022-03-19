import React from 'react';
import './css/normalize.css';
import './css/style.css';
import WelcomePage from './routecomponents/WelcomePage';
import MainPage from './routecomponents/MainPage';

export default function App(){
    const [start, setStart] = React.useState(false);
    const [myDeck, setMyDeck] =  React.useState("");
    return ( !start ?
        <WelcomePage setStart={setStart} setMyDeck={setMyDeck}/> : 
        <MainPage myDeck={myDeck}/>
    );
}