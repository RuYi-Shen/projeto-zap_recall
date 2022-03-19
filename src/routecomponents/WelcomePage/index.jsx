import logo from '../../assets/logo.png';
import React from 'react';
import { availableDecks } from '../../Decks';

export default function WelcomePage({setStart, setMyDeck}){
    const [deck, setDeck] = React.useState("");
    const deckNames = availableDecks();
    function verifyDeck(){
        if (deck == ""){
            alert("Escolha um deck ~(^-^)~");
        }
        else {
            setMyDeck(deck);
            setStart(true);
        }
    }
    function handleChange(event) {
        setDeck(event.target.value);
    }
    return (
        <main className="welcome-page">
            <img src={logo} />
            <h1>ZapRecall</h1>
            <select value={deck} onChange={handleChange} placeholder="Selecione seu deck">
                <option value="">Escolha seu deck</option>
                {deckNames.map((deckName)=><option value={deckName}>{deckName}</option>)}
            </select>
            
            <button onClick={verifyDeck}>Iniciar Recall!</button>
        </main>
    )
}