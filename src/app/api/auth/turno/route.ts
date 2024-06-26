import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import TurnoModel from '@/models/turno';
export const POST = async (req: Request, res: Response) => {
    await connectDB();

    try {
        const body = await req.json();
        const newTurno = await TurnoModel.create(body);

        return NextResponse.json({ data: newTurno }, { status: 200 });
    } catch (error) {
        console.error('Error al crear el turno:', error);

        return NextResponse.json({ data: null }, { status: 500 });
    }
};

// Especifica los tipos de req y res como Request y Response respectivamente
export const GET = async (req: Request, res: Response) => {
    await connectDB();

    try {
        const blog = await TurnoModel.find();

        return NextResponse.json({ data: blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
}

// Especifica los tipos de req y res como Request y Response respectivamente
// export const PUT = async (req: Request, res: Response) => {
//     await connectDB();

//     try {
//         const { id } = req.query;
//         const turno = await TurnoModel.findById(id);

//         if (!turno) {
//             return NextResponse.json({ data: null, message: 'Turno no encontrado' }, { status: 404 });
//         }

//         await turno.remove();

//         return NextResponse.json({ data: turno, message: 'Turno eliminado' }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ data: null, message: 'Error al eliminar el turno' }, { status: 500 });
//     }
// };

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