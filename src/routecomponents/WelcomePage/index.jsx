import logo from '../../assets/logo.png'

export default function WelcomePage({setStart}){
    return (
        <main className="welcome-page">
            <img src={logo} />
            <h1>ZapRecall</h1>
            <select placeholder="Selecione seu deck">
                <option value="">Escolha seu deck</option>
                <option value="React">React</option>
                <option value="JavaScript">Javascript</option>
                <option value="DRIVEN">DRIVEN</option>
            </select>
            
            <button onClick={()=>setStart(true)}>Iniciar Recall!</button>
        </main>
    )
}