// pages/games/game.js
import React from 'react';
import { useRouter } from 'next/router';

function Game() {
  const games = [
    {
      title: 'Super Mario',
      url: 'https://www.retrogames.cc/embed/44789-super-mario-bros-two-player-hack-shared-lives.html',
      imagen: 'https://i.3djuegos.com/juegos/5327/super_mario_bros/fotos/ficha/super_mario_bros-1698422.webp',
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
    {
      title: 'RetroGames',
      url: 'https://www.retrogames.cc/',
      imagen: 'https://www.retrogames.cc/images/logo.png?v=20180731',
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
                <p className="text-gray-300">#</p>
                <a
                  href={`/juego?gameUrl=${encodeURIComponent(game.url)}&title=${encodeURIComponent(game.title)}`}
                  className="bg-blue-500 text-white mt-2 py-1 px-4 rounded-full inline-block"
                >
                  Jugar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Game;
