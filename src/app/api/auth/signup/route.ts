import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const { fullname, email, password } = await request.json();

        console.log(fullname, email, password);

        if (!password || password.length < 6) {
            return NextResponse.json({
                message: "Password must be at least 6 characters"
            }, {
                status: 400
            });
        }

        await connectDB();

        const userFound = await User.findOne({ email });

        if (userFound) {
            return NextResponse.json({
                message: "Email already exists"
            }, {
                status: 409
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            email,
            fullname,
            password: hashedPassword
        });

        const savedUser = await user.save();

        return NextResponse.json({
            _id: savedUser._id,
            email: savedUser.email,
            fullname: savedUser.fullname,
        });
        
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}