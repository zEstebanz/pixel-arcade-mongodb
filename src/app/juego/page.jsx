"use client"
import { useEffect, useState } from 'react';

function GamePage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [gameTitle, setGameTitle] = useState('');

  useEffect(() => {
    // Acceder a la URL y otros parámetros de la página
    const queryParams = new URLSearchParams(window.location.search);
    const gameUrl = queryParams.get('gameUrl');
    const title = queryParams.get('title');

    if (gameUrl && title && !iframeLoaded) {
      // Configura el título del juego
      setGameTitle(title);

      // Crea el iframe y muestra el juego
      const iframe = document.createElement('iframe');
      iframe.src = decodeURIComponent(gameUrl);
      iframe.width = '600';
      iframe.height = '450';
      iframe.frameBorder = 'no';
      iframe.allowFullscreen = true;
      iframe.webkitAllowFullScreen = true;
      iframe.mozAllowFullScreen = true;
      iframe.scrolling = 'no';

      // Agrega el iframe al contenedor deseado
      const iframeContainer = document.getElementById('iframe-container');
      iframeContainer.innerHTML = ''; // Limpia el contenedor por si acaso
      iframeContainer.appendChild(iframe);

      setIframeLoaded(true);
    }
  }, [iframeLoaded]);

  return (
    <section className='h-screen'>
      <div>
        <h2 className="text-6xl font-bold text-center text-white pt-5">{gameTitle}</h2>
      </div>
      <div className="flex items-center justify-center pt-5">
        <div id="iframe-container">
          {iframeLoaded && (
            <div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GamePage;
