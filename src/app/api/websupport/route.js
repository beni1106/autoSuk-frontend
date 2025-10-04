import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    const token = process.env.API_TOKEN || "BAS2025";

    const fallback = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    console.log("======================================");
    console.log("📥 [API] Request masuk ke /api/getWebsupport");
    console.log("🌐 Domain dari query:", domain || "(kosong)");

    if (!domain) {
        console.log("⚠️ Domain kosong, kirim fallback default:", fallback);
        console.log("======================================");
        return NextResponse.json(fallback, { status: 400, headers: corsHeaders() });
    }

    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;
    console.log("🌍 Fetch ke URL eksternal:", url);

    try {
        const res = await fetch(url);
        console.log("📡 Status respon eksternal:", res.status, res.statusText);

        const text = await res.text();
        console.log("📨 Respon mentah dari server eksternal:", text);

        let parsed;
        try {
            parsed = JSON.parse(text);
            console.log("✅ Parsing JSON berhasil");
        } catch (err) {
            console.error("❌ Gagal parse JSON:", err);
            console.log("📦 Kirim fallback data:", fallback);
            console.log("======================================");
            return NextResponse.json(fallback, { status: 500, headers: corsHeaders() });
        }

        // 🔍 Proses hasil JSON
        let data = fallback;
        if (Array.isArray(parsed) && parsed.length > 0) {
            const item = parsed[0];
            if (item?.name && item?.whatsapp) {
                data = { name: item.name, whatsapp: item.whatsapp };
            }
        } else if (parsed?.name && parsed?.whatsapp) {
            data = { name: parsed.name, whatsapp: parsed.whatsapp };
        }

        console.log("✅ Data hasil final yang dikirim ke frontend:", data);

        // 🧁 Simpan cookie domain
        const isProd = process.env.NODE_ENV === "production";
        const response = NextResponse.json(data, { headers: corsHeaders() });

        response.cookies.set("domain", domain, {
            httpOnly: false,
            secure: isProd,
            sameSite: isProd ? "none" : "lax",
            path: "/",
            maxAge: 60 * 60, // 1 jam
        });

        console.log("🍪 Cookie diset untuk domain:", domain);
        console.log("======================================");

        return response;
    } catch (error) {
        console.error("❌ Error saat fetch API eksternal:", error);
        console.log("📦 Kirim fallback data:", fallback);
        console.log("======================================");
        return NextResponse.json(fallback, { status: 500, headers: corsHeaders() });
    }
}

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders(true) });
}

function corsHeaders(isPreflight = false) {
    const origin =
        process.env.NODE_ENV === "production"
            ? "https://basspreneur.com"
            : "http://localhost:3000";

    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Expose-Headers": "Set-Cookie",
        ...(isPreflight && {
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }),
    };
}
