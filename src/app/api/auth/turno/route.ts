// pages/api/turnos.js
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import { TurnoModel } from '@/models/turno';

//crear
export const POST = async (request: Request) => {
    return NextResponse.json({
        message: "Creando tarea...",
    })
}

export const GET = async () => {
    return NextResponse.json({
        message: "Obteniendo tarea...",
    })
}






// export const POST = async (request: Request) =>{
//     await connectDB()
//     try {
//         const body = await request.json()
//         const newTurno = await TurnoModel.create(body)
//         return NextResponse.json({data:newTurno}, {status:200})
//     } catch (error) {
//         return NextResponse.json({data: null}, {status:500})
//     }
// }