"use client"
import { useEffect, useState } from 'react';
import axios from 'axios'; // Asegúrate de tener Axios instalado
import { useSession } from 'next-auth/react';

function DashboarTurnos() {
    const { data: session, status } = useSession();
    const [turnos, setTurnos] = useState([]);

    useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte
        const fetchTurnos = async () => {
            try {
                // Realiza una solicitud a tu endpoint API para obtener los turnos
                const response = await axios.get('/api/auth/turnos'); // Reemplaza con tu URL real
                setTurnos(response.data); // Almacena los turnos en el estado
            } catch (error) {
                console.error('Error al obtener los turnos:', error);
            }
        };

        fetchTurnos();
    }, []); // El segundo argumento [] asegura que esta función se ejecute solo una vez al montar el componente

    return (
        <div className="text-white flex flex-col items-center justify-center h-auto lg:h-[calc(100vh-4rem)] gap-y-5 p-4">
            <h1 className="font-bold text-3xl text-center">Mis Turnos</h1>

            <div className="bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                <pre>
                    {JSON.stringify(turnos, null, 2)}
                </pre>
            </div>
        </div>
    );
}

export default DashboarTurnos;