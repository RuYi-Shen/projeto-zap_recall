import setinha from '../../assets/setinha.png';
import seta from '../../assets/seta.png';
import React from 'react';

export default function Flashcard({index, content}) {
    const {Q:question, R:answer} = content;
    const [cardOpen, setCardOpen] = React.useState(false);
    function turnCard(index) {
        document.querySelectorAll(".flashcard")[index].querySelector(".front.face").style.transform = "rotateY(-180deg)";
        document.querySelectorAll(".flashcard")[index].querySelector(".back.face").style.transform = "rotateY(0deg)";
    }

    return ( 
        !cardOpen ?
        <div className="flashcard">
            <div className="list">
                <p>Pergunta {index+1}</p>
                <img src={seta} alt="seta" onClick={()=>setCardOpen(true)}/>
            </div>
        </div> : 

        <div className="flashcard">
            <div className="face front">
                <p>{question}</p>
                <img src={setinha} alt="setinha" onClick={()=>turnCard(index)} />
            </div> 
            <div className="face back">
                <p>{answer}</p>
                <img src={setinha} alt="setinha" />
            </div>
        </div>
    );
}