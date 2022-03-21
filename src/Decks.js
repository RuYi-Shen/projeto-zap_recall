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
    ]},
    { 
    name: "Chinese",
    cards: [
        { Q: "的", R: "de - (possessive particle), of / really and truly / aim, clear" },
        { Q: "一", R: "yi - one / single / a(n)" }, 
        { Q: "是", R: "shì - is, are, am, yes to be" },
        { Q: "不", R: "	bù - (negative prefix) no, not" },
        { Q: "上", R: "shàng - above, on, over, top, (go) up, last, previous" },
        { Q: "人", R: "rén - man, person, people" },
        { Q: "我", R: "wǒ I, me, myself" },
        { Q: "有", R: "yǒu- to have, there is, there are, to exist, to be" },
        { Q: "他", R: "	tā - he, him" },
        { Q: "这", R: "	zhè	- this/ these" },
        { Q: "大", R: "dà - big, huge, large, major, great, wide, deep, oldest, eldest / doctor" },
        { Q: "来", R: "lái - to come" },
        { Q: "中", R: "zhōng - within, among, in, middle, center, while (doing something), during" },
        { Q: "在", R: "zài - (located) at, in, exist" }
    ]},
    { 
    name: "DRIVEN",
    cards: [
        { Q: "O que é a formação Driven?", R: "A Driven é uma formação em Desenvolvimento Full Stack" },
        { Q: "Quais são as formas de pagamento", R: "ISA, modelo de renda compartilhada" }, 
        { Q: "A área de TI tem muitas oportunidades mesmo?", R: "Até 2030 vamos ter só no Brasil mais de 1 MILHÃO de vagas não preenchidas para profissionais de tecnologia" },
        { Q: "Para quem é a Driven?", R: "A Driven é para pessoas obstinadas a alcançar seus objetivos." },
        { Q: "Qual é a duração da formação?", R: "A formação tem duração aproximada de 9 meses. Ao todo, são 1200h de formação." },
        { Q: "Como funciona o processo seletivo?", R: "Inscrição -> Desafio -> Etapa Comportamental -> Matrículas" },
        { Q: "O que é necessário para participar das aulas?", R: "Acesso a uma internet, Computador, Webcam, Headset" },
        { Q: "Em que momento do curso vou ser avaliado(a)?", R: "As avaliações são feitas diariamente através das entregas dos projetos ou exercícios." }
    ]}
]

export default function getDeck(deckName){
    let askedDeck = [];
    decks.forEach((deck) => {if (deckName === deck.name) askedDeck = deck.cards});
    if (askedDeck === []) alert("Não existe o deck solicitado");
    else return askedDeck;
}

export function availableDecks(){
    return decks.map((deck) => {return deck.name});
}