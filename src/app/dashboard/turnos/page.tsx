import { connectDB } from '@/libs/mongodb';
import { TurnoModel } from '@/models/turno';

async function loadTurno() {
    connectDB()
    const mostarTurno = await TurnoModel.find()
    return mostarTurno
}

async function DashboarTurnos() {
    const mostrarTurno = await loadTurno()

    return (
        <div className="text-white flex flex-col items-center justify-center h-auto lg:h-[calc(100vh-4rem)] gap-y-5 p-4">
            <h1 className="font-bold text-3xl text-center">Mis Turnos</h1>

            <div className="bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-3 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">Hora</th>
                            <th className="px-6 py-3 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">Opción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mostrarTurno.map((turno, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-black' : 'bg-gray-800'}>
                                <td className="px-6 py-4 whitespace-no-wrap">{turno.fecha}</td>
                                <td className="px-6 py-4 whitespace-no-wrap">{turno.hora}</td>
                                <td className="px-6 py-4 whitespace-no-wrap">{turno.opcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashboarTurnos;
