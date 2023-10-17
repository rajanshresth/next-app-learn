import { NextRequest, NextResponse } from "next/server";
import schema from "./Schema";

export async function GET(request:NextRequest) {
    return NextResponse.json([
        {id:1, name:'Rajan'},
        {id:2, name:'Mosh'}
    ])
}

export async function POST(request:NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status:401})
    }
    return NextResponse.json(body,{status:201});
}