const decks = [
    { 
    name: "React",
    cards: [
        { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
        { Q: "O React é __", R: "Uma biblioteca JavaScript para construção de interfaces" }, 
        { Q: "Componentes devem iniciar com __", R: "letra maiúscula" },
        { Q: "Podemos colocar __ dentro do JSX", R: "expressões" },
        { Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma" },
        { Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências" },
        { Q: "Usamos props para __", R: "passar diferentes informações para componentes" },
        { Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]}
]

export default function getDeck(deckName){
    const askedDeck = [];
    decks.forEach((deck) => {if (deckName == deck.name) askedDeck = deck.cards});
    return askedDeck;
}

export default function availableDecks(){
    return decks.map((deck) => {return deck.name});
}