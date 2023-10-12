// pages/api/turnos.js
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import { TurnoModel } from '@/models/turno';

//crear
export const POST = async (req, res) => {
    await connectDB()
    try {
        const body = await req.json()
        const newTurno = await TurnoModel.create(body)
        return NextResponse.json({ data: newTurno }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}

export const GET = async (req, res) => {
    await connectDB();

    try {
        // Realiza una consulta para obtener todos los turnos
        const turnos = await TurnoModel.find();

        // Devuelve los turnos en la respuesta
        return NextResponse.json({ data: turnos }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
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