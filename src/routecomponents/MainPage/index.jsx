import Header from '../../components/Header';
import Flashcard from '../../components/Flashcard';
import Footer from '../../components/Footer';
import getDeck from '../../Decks';
import React from 'react';

export default function MainPage({myDeck}){
    const deck = getDeck(myDeck);
    const [doneCards, setDoneCards] = React.useState([]);
    const [allGood, setAllGood] = React.useState(true);
    const [allDone, setAllDone] = React.useState(false);

    return (
        <main className="main-page">
            <Header />
            {deck.map((card,index)=><Flashcard index={index} content={card} totalCards={deck.length} doneCards={doneCards} setDoneCards={setDoneCards} setAllGood={setAllGood} setAllDone={setAllDone} key={index}/>)}
            <Footer doneCards={doneCards} totalCards={deck.length} allGood={allGood} allDone={allDone}/>
        </main>
    )
}