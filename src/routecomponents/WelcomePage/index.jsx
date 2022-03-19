import logo from '../../assets/logo.png'

export default function WelcomePage({setStart}){
    return (
        <main className="welcome-page">
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={()=>setStart(true)}>Iniciar Recall!</button>
        </main>
    )
}