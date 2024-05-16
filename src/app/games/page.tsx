// pages/games/game.js
import React from 'react';
import Link from 'next/link';

function Game() {
  const games = [
    {
      title: 'Super Mario',
      url: 'https://www.retrogames.cc/embed/44789-super-mario-bros-two-player-hack-shared-lives.html',
      imagen: 'https://i.3djuegos.com/juegos/5327/super_mario_bros/fotos/ficha/super_mario_bros-1698422.webp',
    },
    {
      title: 'Pixel Aventure',
      url: 'https://itch.io/embed/2702169',
      imagen: 'https://img.itch.zone/aW1nLzE2MTA4OTA0LnBuZw==/original/gqmCK6.png',
    },
    {
      title: 'Doom',
      url: 'https://www.retrogames.cc/embed/40297-doom-europe.html',
      imagen: 'https://i.3djuegos.com/juegos/5425/doom/fotos/ficha/doom-1716462.webp',
    },
    {
      title: 'Sonic Hedgehog 2',
      url: 'https://www.retrogames.cc/embed/17236-sonic-the-hedgehog-2-world-rev-a.html',
      imagen: 'https://i.3djuegos.com/juegos/18474/sonic_the_hedgehog_2/fotos/ficha/sonic_the_hedgehog_2-5651061.webp',
    },
    {
      title: 'Street Fighter',
      url: 'https://www.retrogames.cc/embed/10030-street-fighter-ii-champion-edition-street-fighter-2-920513-etc.html',
      imagen: 'https://bonusstagemagazine.files.wordpress.com/2020/11/curiosidades-street-fighter-ii-tatuaje-zangief.png',
    },
    {
      title: 'Bomberman',
      url: 'https://www.retrogames.cc/embed/20411-bomberman-usa.html',
      imagen: 'https://i.3djuegos.com/juegos/14398/super_bomberman_r/fotos/ficha/super_bomberman_r-3985531.webp',
    },
    {
      title: 'Tetris',
      url: 'https://www.retrogames.cc/embed/10290-tetris-bootleg-bootleg.html',
      imagen: 'https://uvejuegos.com/img/caratulas/29965/Tetris-EEUU-MD.jpg',
    },
    {
      title: 'Mortal kombat',
      url: 'https://www.retrogames.cc/embed/40808-mortal-kombat-trilogy.html',
      imagen: 'https://img.asmedia.epimg.net/resizer/z2HAzhkx9G02VIVrrsq9kjqTyic=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/H42YCTNZGNNIBMOIZYS3H6IJTE.jpg',
    },
    // Agrega más juegos con sus respectivas URL
  ];

  return (
    <section className="p-8">
      <h1 className="text-white text-center text-6xl mb-8 font-bold">Games</h1>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div key={index} className="boxGameCustom h-100 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
              <a
                href={`/juego?gameUrl=${encodeURIComponent(game.url)}&title=${encodeURIComponent(game.title)}`}
              >
                <img
                  src={game.imagen}
                  className="block w-full h-80 object rounded-lg"
                  alt={game.title}
                />
              </a>
              <div className="card-body mt-3">
                <h3 className="text-2xl font-bold">{game.title}</h3>
                {/* <p className="text-gray-300">#</p> */}
                <a
                  href={`/juego?gameUrl=${encodeURIComponent(game.url)}&title=${encodeURIComponent(game.title)}`}
                  className="buttonCustom2 text-white mt-2 py-1 px-4 rounded-full inline-block"
                >
                  Jugar
                </a>
              </div>
            </div>
          ))}

          {/* Inicio de Juego */}
          <div className="boxGameCustom h-100 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
            <Link href="https://www.retrogames.cc/">
              <img
                src="https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/294196334_415529703927237_3624935347821343113_n.png?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6VVWRxV3PsAAX8nhtBU&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfDIZLOgFKc791fI9WCZLCpJwEo7Z6Huha-NurpYcZOH8A&oe=65457CB8"
                className="block w-full h-80 object-cover rounded-lg"
                alt="Juego 1"
              />
            </Link>
            <div className="card-body mt-3">
              <h3 className="text-2xl font-bold">RetroGames</h3>
              <Link href="https://www.retrogames.cc/" className="nes-btn bg-blue-500 text-white mt-2 py-1 px-4 rounded-full inline-block">
                Jugar
              </Link>
            </div>
          </div>
          {/* Fin de juego */}

        </div>

      </div>
    </section>
  );
}

export default Game;
