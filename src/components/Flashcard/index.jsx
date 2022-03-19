import setinha from '../../assets/setinha.png'
import seta from '../../assets/seta.png'

export default function Flashcard() {
    return (
        <div className="flashcard">
            <p>Pergunta 1</p>
            <img src={seta} alt="seta" />
        </div>
    );
}

