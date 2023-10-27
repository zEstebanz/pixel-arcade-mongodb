import Link from "next/link";
import { getServerSession } from 'next-auth';

async function HomePage() {

  const session = await getServerSession()

  return (
    <section className="p-8">
      <div className="text-white container mx-auto text-center backgroundCover">
        <h1 className="textCenter font-mont">Pixel Arcade</h1>

        {session ? (
          <>
            <section className="text-center p-8">
              <h2 className="text-3xl font-semibold mb-5">Welcome to Pixel Arcade</h2>
              {/* <p className="text-lg">En Pixel Arcade, te ofrecemos una amplia selección de videojuegos emocionantes. ¡Sumérgete en el mundo de la diversión y la aventura!</p> */}
              {/* <p className="text-lg">Explora nuestras diferentes categorías de juegos</p> */}

              <p className="text-lg">Pedir Turnos</p>
              <Link href="/turnos" className="buttonCustom text-white py-2 px-4 rounded-full text-lg inline-block mt-4">Pedir Turnos</Link>

              <p className="text-lg p-4">Juegos</p>
              <Link href="/games" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg inline-block">Jugar ahora</Link>

              {/* <p className="text-lg">También queremos recordarte que puedes registrarte en nuestro sistema para solicitar turnos en nuestro local de videojuegos. ¡Aprovecha al máximo tu experiencia en Pixel Arcade!</p> */}
            </section>
          </>
        ) : (
          <>
            <section className="text-center p-8">
              <h2 className="text-3xl font-semibold">Welcome to Pixel Arcade</h2>


              <p className="mt-4 text-lg">¿Eres Nuevo? Registrate aquí</p>
              <Link href="/register" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg inline-block mt-2">Crear Cuenta</Link>

              <p className="text-lg">¿Ya tienes una cuenta? Inicia Sesión aquí</p>
              <Link href="/login" className="buttonCustom text-white py-2 px-4 rounded-full text-lg inline-block mt-2">Iniciar Sesión</Link>

              <p className="text-lg">¿Quieres jugar a juegos online?</p>
              <Link href="/games" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg inline-block">Jugar ahora</Link>

              <p className="text-lg p-4">Pixel Arcade es un sistema de gestión de usuarios y una plataforma online donde pueden jugar a juegos retro.</p>

            </section>
          </>
        )}

      </div>
    </section>
  )
}

export default HomePage;