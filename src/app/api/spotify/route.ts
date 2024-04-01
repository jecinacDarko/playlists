import { searchSpotify } from "@/services/fetch-spotify-data";
import { NextRequest, NextResponse } from "next/server";

  export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { query } = await req.json();
        if (query) {
            const result = await searchSpotify(query);
            return NextResponse.json(result);
        }
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred.' });
    }
}
