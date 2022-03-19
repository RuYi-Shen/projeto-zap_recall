import Header from '../../components/Header'
import Flashcard from '../../components/Flashcard'
import Footer from '../../components/Footer'
import getDeck from '../../Decks'

export default function MainPage({myDeck}){
    const deck = getDeck(myDeck);
    return (
        <main className="main-page">
            <Header />
            {deck.map((card,index)=><Flashcard index={index} content={card}/>)}
            <Footer />
        </main>
    )
}