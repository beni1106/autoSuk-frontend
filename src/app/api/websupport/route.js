import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    // Ambil domain dari query param, kalau kosong pakai default
    const domain = searchParams.get("domain") || "defaultDomain";
    const token = process.env.API_TOKEN;

    const fallbackData = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    if (!token) {
        return NextResponse.json(
            { error: "Token kosong", fallback: fallbackData },
            { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }
        );
    }

    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;
    console.log("🌐 Fetching URL:", url);

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        const text = await res.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch {
            // Kalau response bukan JSON, pakai fallback
            return NextResponse.json({ fallback: fallbackData }, { headers: { "Access-Control-Allow-Origin": "*" } });
        }

        // Pastikan data array dan ada property whatsapp
        if (!Array.isArray(data) || !data[0]?.whatsapp) {
            return NextResponse.json({ fallback: fallbackData }, { headers: { "Access-Control-Allow-Origin": "*" } });
        }

        return NextResponse.json(data, { headers: { "Access-Control-Allow-Origin": "*" } });

    } catch (err) {
        console.error("❌ Error:", err.message);
        return NextResponse.json({ fallback: fallbackData, error: err.message }, { headers: { "Access-Control-Allow-Origin": "*" } });
    }
}

export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        }
    );
}
