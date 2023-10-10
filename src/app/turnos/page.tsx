"use client";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Turnos() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const turnoResponse = await axios.post("/api/auth/turno", {
        fecha: formData.get("fecha"),
        opcion: formData.get("opcion"),
      });
      console.log(turnoResponse);
      router.push('/dashboard/turnos'); // Redirige a la ruta '/dashboard'

    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <section className="p-8">
      <h1 className="text-center text-white text-6xl text-white font-bold">Turnos</h1>
      <div className="flex justify-center items-center p-4">
        <form onSubmit={handleSubmit} className="backgroundCover px-4 py-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3">
          {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-7">Pedir Turno</h1>

          <label className="text-slate-300">Fecha:</label>
          <input
            type="date"
            id="fecha"
            placeholder="Fullname"
            className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
            name="fecha"
          />

          <label className="text-slate-300">opcion:</label>
          <select
            id="opcion"
            className="text-white w-full bg-zinc-800 border p-2 rounded-md"
            name="opcion"
          >
            <option value="maquinas">Máquinas</option>
            <option value="consolas">Consolas</option>
            <option value="otros">Otros</option>
          </select>


          <button className="bg-blue-500 text-white px-2 py-1 mt-4 block w-full">
            Registrar Turno
          </button>
        </form>
      </div>
    </section>
  );
}

export default Turnos;