import React from 'react';
import getDeck from '../../Decks';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Flashcard from '../../components/Flashcard';

export default function MainPage({myDeck}){
    const [doneCards, setDoneCards] = React.useState([]);
    const [allGood, setAllGood] = React.useState(true);
    const [allDone, setAllDone] = React.useState(false);
    const deck = getDeck(myDeck);

    return (
        <main className="main-page">
            <Header />
            {deck.map((card,index)=><Flashcard index={index} content={card} totalCards={deck.length} doneCards={doneCards} setDoneCards={setDoneCards} setAllGood={setAllGood} setAllDone={setAllDone} key={index}/>)}
            <Footer doneCards={doneCards} totalCards={deck.length} allGood={allGood} allDone={allDone}/>
        </main>
    )
}