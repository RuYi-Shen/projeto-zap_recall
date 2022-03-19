import logo from '../../assets/logo.png'

export default function WelcomePage(){
    return (
        <main className="welcome-page">
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!</button>
        </main>
    )
}