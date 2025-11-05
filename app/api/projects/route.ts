import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET() {
    return NextResponse.json({projects});
}

export async function POST(req: Request) {
    const apiKey = req.headers.get("x-api-key");
    if(apiKey !== process.env.POST_API_KEY) {
        return NextResponse.json({ error: "Unauthorized"}, {status: 401});
    }

    const body = await req.json();
    if(!body.title || !body.description) {
        return NextResponse.json({error: "Missing field"}, {status: 400});
    }

    const newProject = {id: Date.now(), ...body};
    projects.push(newProject);

    return NextResponse.json({ project: newProject}, {status: 201});
}