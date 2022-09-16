import Header from '../../components/Header';
import './style.css';

function About() {
    return (
        <>
            <Header />
            <main className="AboutMain">
                <p className="AboutText">
                    O JustListen é uma aplicação web que mostra a disponibilidade de músicas nos principais serviços de streaming.
                    Além disso, deve-se ressaltar que essa aplicação foi inspirada pelo serviço JustWatch,
                    e utiliza a API pública da Songlink/Odesli.
                </p>
            </main>
        </>
    );
}

export default About;