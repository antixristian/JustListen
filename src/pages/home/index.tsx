import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import SearchIcon from '../../assets/searchIcon.svg';
import amazon from '../../assets/amazon 1.png';
import tidal from '../../assets/tidal.png';
import './style.css';

interface LinkInfo {
    linksByPlatform: {
        amazonMusic: {
            url: string,
        },
        appleMusic: {
            url: string,
        },
        deezer: {
            url: string,
        },
        spotify: {
            url: string,
        },
        tidal: {
            url: string,
        },
        youtubeMusic: {
            url: string,
        },
    }
}

function Home() {
    // Pegar URL da música
    const [url, setUrl] = useState("");

    // Pegar info da API
    const [links, setLinks] = useState<LinkInfo>();
    useEffect(() => {
        const fetchData = async () => {
            // Com key seria `https://api.song.link/v1-alpha.1/links?url=${url}&userCountry=BR&key=<key>`
            const response = await fetch(`https://api.song.link/v1-alpha.1/links?url=${url}&userCountry=BR`);
            const linkData = await response.json();
            setLinks(linkData);
        }
        fetchData();
    }, [url]);
    return (
        <>
            <Header />
            <main className='HomeMain'>
                <div className="Banner">
                    <img src={require('../../assets/pika.gif')} alt="Pikachu ouvindo música" />
                    <p>Encontre suas músicas favoritas nas principais plataformas!</p>
                </div>
                <div className='SearchContainer'>
                    <img className='SearchIcon' src={SearchIcon} alt="Pesquisa" />
                    <input
                        value={url}
                        className='SearchText'
                        type="text"
                        placeholder='Insira a URL da música no YouTube'
                        onChange={(event) => setUrl(event.target.value)}
                        onBlur={(event) => setUrl(event.target.value)}
                    />
                </div>
                <div className='CardsContainer'>
                    <div className='Left'>
                        <img src={amazon} alt="Logo Amazon Music" />
                        <img src="https://music.apple.com/assets/favicon/favicon-32-283b261ac09e23987aae02bdb3cbbbaa.png" alt="Logo Apple Music" />
                        <img src="https://e-cdns-files.dzcdn.net/cache/images/common/favicon/favicon-32x32.42917d14a8cb0cc4045c827251b57c0e.png" alt="Logo Deezer" />
                        <img src="https://open.spotifycdn.com/cdn/images/favicon32.8e66b099.png" alt="Logo Spotify" />
                        <img src={tidal} alt="Logo Tidal" />
                        <img src="https://music.youtube.com/img/favicon_32.png" alt="Logo YouTube Music" />
                    </div>
                    <div className='Right'>
                        <a href={links?.linksByPlatform?.amazonMusic?.url}>Amazon Music</a>
                        <a href={links?.linksByPlatform?.appleMusic?.url}>Apple Music</a>
                        <a href={links?.linksByPlatform?.deezer?.url}>Deezer</a>
                        <a href={links?.linksByPlatform?.spotify?.url}>Spotify</a>
                        <a href={links?.linksByPlatform?.tidal?.url}>Tidal</a>
                        <a href={links?.linksByPlatform?.youtubeMusic?.url}>YouTube Music</a>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Home;