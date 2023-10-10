import React from 'react'
import Link from 'next/link'

function Game() {
  return (
    
    <section className="p-8">
      <h1 className="text-white text-center text-6xl mb-8 font-bold">Games</h1>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">

          <div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/mario">
                <img
                  src="https://i.3djuegos.com/juegos/5327/super_mario_bros/fotos/ficha/super_mario_bros-1698422.webp"
                  className="card-img-top"
                  alt="Juego 1"
                />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Super Mario</h3>
                <p className="card-text">Super Mario Bros, Nintendo</p>
                <Link href="/games/mario" className="nes-btn btn-primary">
                  Jugar
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/mario">
                <img
                  src="https://i.3djuegos.com/juegos/5425/doom/fotos/ficha/doom-1716462.webp"
                  className="card-img-top"
                  alt="Juego 1"
                />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Doom</h3>
                <p className="card-text">Doom, Sega Genesis</p>
                <Link href="/games/doom" className="nes-btn btn-primary">Jugar</Link>
              </div>
            </div>
          </div><div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/sonic2">
                <img src="https://i.3djuegos.com/juegos/18474/sonic_the_hedgehog_2/fotos/ficha/sonic_the_hedgehog_2-5651061.webp" className="card-img-top" alt="Juego 3" />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Sonic The Hedgehog 2</h3>
                <p className="card-text">Sonic The Hedgehog 2 16-bit, Sega Genesis</p>
                <Link href="/games/sonic2" className="nes-btn btn-primary">Jugar</Link>
              </div>
            </div>
          </div><div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/streetf">
                <img src="https://bonusstagemagazine.files.wordpress.com/2020/11/curiosidades-street-fighter-ii-tatuaje-zangief.png" className="card-img-top" alt="Juego 4" />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Street Fighter 2</h3>
                <p className="card-text">Street Fighter 2</p>
                <Link href="/games/streetf" className="nes-btn btn-primary">Jugar</Link>
              </div>
            </div>
          </div><div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/bomberman">
                <img src="https://i.3djuegos.com/juegos/14398/super_bomberman_r/fotos/ficha/super_bomberman_r-3985531.webp" className="card-img-top" alt="Juego 5" />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Bomberman</h3>
                <p className="card-text"></p>
                <Link href="/games/bomberman" className="nes-btn btn-primary">Jugar</Link>
              </div>
            </div>
          </div><div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/tetris">
                <img src="https://uvejuegos.com/img/caratulas/29965/Tetris-EEUU-MD.jpg" className="card-img-top" alt="Juego 5" />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Tetris</h3>
                <p className="card-text"></p>
                <Link href="/games/tetris" className="nes-btn btn-primary">Jugar</Link>
              </div>
            </div>
          </div><div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/mortalKombat">
                <img src="https://img.asmedia.epimg.net/resizer/z2HAzhkx9G02VIVrrsq9kjqTyic=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/H42YCTNZGNNIBMOIZYS3H6IJTE.jpg" className="card-img-top" alt="Juego 5" />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Motal Kombat Trylogi</h3>
                <p className="card-text"></p>
                <Link href="/games/mortalKombat" className="nes-btn btn-primary">Jugar</Link>
              </div>
            </div>
          </div><div className="col-span-1 mb-5">
            <div className="boxGameCustom h-100">
              <Link href="/games/mario">
                <img
                  src="https://i.3djuegos.com/juegos/5327/super_mario_bros/fotos/ficha/super_mario_bros-1698422.webp"
                  className="card-img-top"
                  alt="Juego 1"
                />
              </Link>
              <div className="card-body">
                <h3 className="card-title">Super Mario</h3>
                <p className="card-text">Super Mario Bros, Nintendo</p>
                <Link href="/games/mario" className="nes-btn btn-primary">
                  Jugar
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>

  )
}

export default Game