import React from 'react'
import red from '../../assets/red.png'
import sad from '../../assets/sad.png'
import green from '../../assets/green.png'
import party from '../../assets/party.png'
import yellow from '../../assets/yellow.png'

export default function Footer({doneCards, totalCards, allGood, allDone}) {

    function answerColor(color,index){
        if(color==="red") return <img src={red} alt="red" key={index}/> ;
        else if(color==="yellow") return <img src={yellow} alt="yellow" key={index}/> ;
        else if(color==="green") return <img src={green} alt="green" key={index}/> ;
        return <></>;
    }

    return (
        <footer>
            { allDone ? 
                (allGood ? 
                    <>
                    <div className="feedback">
                        <img src={party} alt="party"/>
                        <p><b>Parabéns</b></p>
                    </div>
                    <p className="message">Você não esqueceu de nenhum flashcard!</p>
                    </> : 
                    <>
                    <div className="feedback">
                        <img src={sad} alt="sad"/>
                        <p><b>Putz...</b></p>
                    </div>
                    <p className="message">Ainda faltam alguns... Mas não desanime!</p>
                    </>
                ):
                <></>
            }
            <p>{doneCards.length}/{totalCards} CONCLUÍDOS</p>
            <div className="result">
                {doneCards.map((color,index)=>{ return answerColor(color,index)})}
            </div>
            { allDone ? <button onClick={()=>window.location.reload()}>REINICIAR RECALL</button> : <></> }
        </footer>
    );
}