"use client";
import { FormEvent, useState, useEffect } from "react";
import Link from "next/link";

interface Turno {
  fecha: string;
  hora: string;
  opcion: string;
}

function Turnos() {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Cargar turnos desde LocalStorage al montar el componente
    const storedTurnos = localStorage.getItem("turnos");
    if (storedTurnos) {
      setTurnos(JSON.parse(storedTurnos));
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    const nuevoTurno: Turno = {
      fecha: formData.get("fecha") as string,
      hora: formData.get("hora") as string,
      opcion: formData.get("opcion") as string,
    };

    if (!nuevoTurno.fecha || !nuevoTurno.hora || !nuevoTurno.opcion) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Guardar el nuevo turno en el estado y en LocalStorage
    const updatedTurnos = [...turnos, nuevoTurno];
    setTurnos(updatedTurnos);
    localStorage.setItem("turnos", JSON.stringify(updatedTurnos));

    // Limpiar el error si existía
    setError(undefined);
  };

  const borrarTurnos = () => {
    localStorage.removeItem("turnos");
    setTurnos([]);
  };

  return (
    <section className="p-8">
      <h1 className="text-center text-white text-6xl font-bold">Turnos</h1>
      <div className="flex justify-center items-center p-4">
        <form onSubmit={handleSubmit} className="backgroundCover px-4 py-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3">
          {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-7">Pedir Turno</h1>

          <label className="text-slate-300">Fecha:</label>
          <input
            type="date"
            id="fecha"
            className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
            name="fecha"
            required
          />

          <label className="text-slate-300">Hora:</label>
          <input
            type="time"
            id="hora"
            className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
            name="hora"
            required
          />

          <label className="text-slate-300">Opción:</label>
          <select
            id="opcion"
            className="text-white w-full bg-zinc-800 border p-2 rounded-md"
            name="opcion"
            required
          >
            <option value="">Seleccionar Opción</option>
            <option value="maquinas">Máquinas</option>
            <option value="consolas">Consolas</option>
            <option value="otros">Otros</option>
          </select>

          <button className="buttonCustom text-white px-2 py-1 mt-4 block w-full">
            Registrar Turno
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-white text-center text-4xl font-bold">Mis Turnos</h2>
        {turnos.length > 0 ? (
          <div className="p-4">
            {turnos.map((turno, index) => (
              <div
                key={index}
                className="bg-zinc-800 text-white p-4 my-2 rounded-lg shadow-lg"
              >
                <p><strong>Fecha:</strong> {turno.fecha}</p>
                <p><strong>Hora:</strong> {turno.hora}</p>
                <p><strong>Opción:</strong> {turno.opcion}</p>
              </div>
            ))}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={borrarTurnos}
            >
              Borrar Todos los Turnos
            </button>
          </div>
        ) : (
          <p className="text-center text-white">No tienes turnos registrados.</p>
        )}
      </div>
    </section>
  );
}

export default Turnos;