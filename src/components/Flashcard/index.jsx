import React from 'react';
import red from '../../assets/red.png';
import seta from '../../assets/seta.png';
import green from '../../assets/green.png';
import yellow from '../../assets/yellow.png';
import setinha from '../../assets/setinha.png';

export default function Flashcard({index, content, doneCards, totalCards, setDoneCards, setAllGood, setAllDone}) {
    const [cardOpen, setCardOpen] = React.useState(false);
    const [cardColor,setCardColor]= React.useState("seta");
    const {Q:question, R:answer} = content;

    function turnCard(index) {
        document.querySelectorAll(".flashcard")[index].querySelector(".front.face").style.transform = "rotateY(-180deg)";
        document.querySelectorAll(".flashcard")[index].querySelector(".back.face").style.transform = "rotateY(0deg)";
    }

    function processAnswer(color,index){
        setDoneCards([...doneCards,(color)]);
        setCardColor(color);
        setCardOpen(false);
        setTimeout(()=>{document.querySelectorAll(".flashcard")[index].querySelector(".list").style.transform = "rotateY(0deg)"},10); 
        if(doneCards.length >= totalCards-1) setAllDone(true);
    }

    function Color(){
        if (cardColor === "red") return <img src={red} alt={cardColor} />;
        else if (cardColor === "green") return <img src={green} alt={cardColor} />;
        else if (cardColor === "yellow") return <img src={yellow} alt={cardColor} />;
        return <img src={seta} alt={cardColor} onClick={()=>setCardOpen(true)} />;
    }

    return (  
        !cardOpen ? 
        <div className="flashcard">
            <div className={`list ${cardColor}`}>
                <p>Pergunta {index+1}</p>
                <Color />
            </div>      
        </div> 
        : 
        <div className="flashcard">
            <div className="face front">
                <div className="cardSize">
                    <p>{answer}</p>
                    <div className="buttons">
                        <button className="red">Não lembrei!</button>
                        <button className="yellow">Quase não lembrei!</button>
                        <button className="green">Zap!</button>
                    </div>
                </div>
                <p>{question}</p>
                <img src={setinha} alt="setinha" onClick={()=>turnCard(index)} />
            </div> 
            <div className="face back">
                <p>{answer}</p>
                <div className="buttons">
                    <button className="red" onClick={()=>{processAnswer("red",index); setAllGood(false)}}>Não lembrei!</button>
                    <button className="yellow" onClick={()=>{processAnswer("yellow",index)}}>Quase não lembrei!</button>
                    <button className="green" onClick={()=>{processAnswer("green",index)}}>Zap!</button>
                </div>
            </div>
        </div>
    );
}