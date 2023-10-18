import { NextRequest, NextResponse } from "next/server";
import schema from "../Schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: {id:string} }) {
    const users= await prisma.user.findUnique({
        where: {id:params.id}
    })
    if (!users) {
        return NextResponse.json({ error: Error('User not found')},{status:404});
    }
    return NextResponse.json(users,{status:201});
}

export async function PUT(request: NextRequest, { params }: { params: {id:string} }){
    const body = await request.json();
    const validation=schema.safeParse(body)
    if(!validation.success) 
        return NextResponse.json(validation.error.errors,{status:400})

    const user= await prisma.user.findUnique({
        where: {id:params.id}
    })
    if(!user)
        return NextResponse.json({error:'User not found'},{status:401});

    const updatedUser=await prisma.user.update({
        where: {id:user.id},
        data: {
            name: body.name,
            email: body.email
        }
    });
    return NextResponse.json(updatedUser,{status:201});

}

export async function DELETE(request: NextRequest, { params }: { params: {id:string} }) {

    const user= await prisma.user.findUnique({
        where: {id:params.id}
    })
    
    if(!user) return NextResponse.json({error:'User not found'},{status:401})

    const updatedUser= await prisma.user.delete({
        where: {id:user.id}
    })
    return NextResponse.json(updatedUser,{status:200});
}