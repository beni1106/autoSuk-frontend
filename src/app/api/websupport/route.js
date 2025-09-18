import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");

    const token = process.env.API_TOKEN;


    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;
    console.log("🌐 Fetching URL:", url);

    try {
        const res = await fetch(url);

        const text = await res.text();
        console.log("📥 Response dari server eksternal:", text);

        if (!res.ok) {
            return NextResponse.json(
                { error: "Gagal fetch data dari server eksternal", detail: text },
                { status: res.status }
            );
        }

        let data;
        try {
            data = JSON.parse(text);
        } catch {
            return NextResponse.json(
                { error: "Response bukan JSON valid", raw: text },
                { status: 500 }
            );
        }

        return NextResponse.json(data);
    } catch (err) {
        console.error("❌ Error:", err.message);
        return NextResponse.json(
            { error: "Terjadi error internal", detail: err.message },
            { status: 500 }
        );
    }
}
