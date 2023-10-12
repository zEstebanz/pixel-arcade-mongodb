"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

function DashboarTurnos() {
    const { data: session, status } = useSession();
    const [turnos, setTurnos] = useState([]);

    useEffect(() => {
        const fetchTurnos = async () => {
            try {
                const response = await axios.get('/api/auth/turnos'); // Reemplaza con tu URL real
                setTurnos(response.data);
            } catch (error) {
                console.error('Error al obtener los turnos:', error);
            }
        };

        fetchTurnos();
    }, []);

    return (
        <div className="text-white flex flex-col items-center justify-center h-auto lg:h-[calc(100vh-4rem)] gap-y-5 p-4">
            <h1 className="font-bold text-3xl text-center">Mis Turnos</h1>

            <div className="bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Fecha</th>
                            <th>Opción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turnos.map((turno, index) => (
                            <tr key={index}>
                                <td>{turno.hora}</td>
                                <td>{turno.fecha}</td>
                                <td>{turno.opcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashboarTurnos;
