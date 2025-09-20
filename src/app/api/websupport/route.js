import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    const token = process.env.API_TOKEN;

    // fallback default
    const fallback = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    if (!domain || !token) {
        return NextResponse.json(fallback, {
            headers: { "Access-Control-Allow-Origin": "*" },
            status: 400,
        });
    }

    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;
    console.log("🌐 Fetching URL:", url);

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 detik

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        const text = await res.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch {
            return NextResponse.json(fallback, {
                headers: { "Access-Control-Allow-Origin": "*" },
                status: 500,
            });
        }

        // Client-safe: pastikan selalu object {name, whatsapp}
        let dataObj;
        if (Array.isArray(data) && data.length > 0) {
            dataObj = data[0];
        } else if (data.name && data.whatsapp) {
            dataObj = data;
        } else {
            dataObj = fallback;
        }

        return NextResponse.json(dataObj, {
            headers: { "Access-Control-Allow-Origin": "*" },
        });
    } catch (err) {
        console.error("❌ Error:", err.message);
        return NextResponse.json(fallback, {
            headers: { "Access-Control-Allow-Origin": "*" },
            status: 500,
        });
    }
}

// handle preflight
export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
