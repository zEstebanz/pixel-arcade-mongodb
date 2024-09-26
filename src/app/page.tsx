'use client'
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { useSession } from "next-auth/react"; // Para obtener la sesión en el cliente

// Navbar Component
export default function Navbar() {
  const { data: session } = useSession(); // Obtener la sesión en el cliente

  return (
    <nav className="bg-black p-4">
      <h1 className="backgroundCover textCenter font-mont mb-5 text-white text-2xl">PIXEL <span className="span">ARCADE</span></h1>

      <div className="text-white container mx-auto text-center backgroundCover h-screen ">
        {session ? (
          // Si la sesión está activa (usuario autenticado)
          <>
            <section className="text-center p-8">
              <h2 className="text-3xl font-semibold mb-5">Welcome to Pixel Arcade</h2>

              <Link href="/turnos" className="buttonCustom2 block py-2 pl-3 pr-4 text-white rounded">Pedir Turnos</Link>

              <p className="text-lg p-4"></p>
              <Link href="/games" className="buttonCustom3 block py-2 pl-3 pr-4 text-white rounded">Jugar ahora</Link>

            </section>
          </>
        ) : (
          // Si no hay sesión (usuario no autenticado)
          <>
            <section className="text-center p-8">
              <h2 className="text-3xl font-semibold">Welcome to Pixel Arcade</h2>

              <p className="mt-4 text-lg">¿Eres Nuevo? Regístrate aquí</p>
              <Link href="/register" className="buttonCustom block py-2 pl-3 pr-4 text-white rounded">Crear Cuenta</Link>

              <p className="text-lg">¿Ya tienes una cuenta? Inicia Sesión aquí</p>
              <Link href="/login" className="buttonCustom2 block py-2 pl-3 pr-4 text-white rounded">Iniciar Sesión</Link>

              <p className="text-lg">¿Quieres jugar a juegos online?</p>
              <Link href="/games" className="buttonCustom3 block py-2 pl-3 pr-4 text-white rounded">Jugar Ahora</Link>

              <p className="text-lg p-4">Pixel Arcade es un sistema de gestión de usuarios y una plataforma online donde pueden jugar a juegos retro.</p>
            </section>
          </>
        )}
      </div>
    </nav>
  );
}
