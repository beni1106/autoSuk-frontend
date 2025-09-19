import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    const token = process.env.API_TOKEN;

    if (!domain || !token) {
        return NextResponse.json(
            {
                error: "Domain atau token kosong, pakai default",
                fallback: { name: "Hamsul Hasan", whatsapp: "6281911846119" }
            },
            {
                status: 400,
                headers: { "Access-Control-Allow-Origin": "*" }
            }
        );
    }

    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;
    console.log("🌐 Fetching URL:", url);

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 detik

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        const text = await res.text();
        console.log("📥 Response dari server eksternal:", text);

        if (!res.ok) {
            return NextResponse.json(
                {
                    error: "Gagal fetch data dari server eksternal",
                    detail: text,
                    fallback: { name: "Hamsul Hasan", whatsapp: "6281911846119" }
                },
                {
                    status: res.status,
                    headers: { "Access-Control-Allow-Origin": "*" }
                }
            );
        }

        let data;
        try {
            data = JSON.parse(text);
        } catch {
            return NextResponse.json(
                {
                    error: "Response bukan JSON valid",
                    raw: text,
                    fallback: { name: "Hamsul Hasan", whatsapp: "6281911846119" }
                },
                {
                    status: 500,
                    headers: { "Access-Control-Allow-Origin": "*" }
                }
            );
        }

        return NextResponse.json(data, {
            headers: { "Access-Control-Allow-Origin": "*" }
        });

    } catch (err) {
        console.error("❌ Error:", err.message);
        return NextResponse.json(
            {
                error: "Terjadi error internal",
                detail: err.message,
                fallback: { name: "Hamsul Hasan", whatsapp: "6281911846119" }
            },
            {
                status: 500,
                headers: { "Access-Control-Allow-Origin": "*" }
            }
        );
    }
}

// handle preflight request
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
