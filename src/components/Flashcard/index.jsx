import setinha from '../../assets/setinha.png'
import seta from '../../assets/seta.png'

export default function Flashcard({index, content}) {
    return (
        <div className="flashcard">
            <p>Pergunta {index+1}</p>
            <img src={seta} alt="seta" />
        </div>
    );
}

