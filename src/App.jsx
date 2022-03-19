import './css/normalize.css'
import './css/style.css'
import WelcomePage from './routecomponents/WelcomePage';
import MainPage from './routecomponents/MainPage';

export default function App(){
    return (
    <>
        <WelcomePage />
        <MainPage />
    </>
    );
}