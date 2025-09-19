import { NextResponse } from "next/server";

// normalisasi nomor Indonesia → 08xx jadi 628xx
function normalizeIDPhone(num) {
    if (!num) return "";
    let s = num.replace(/[^0-9]/g, "");
    if (s.startsWith("0")) s = "62" + s.slice(1);
    return s;
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const nama = searchParams.get("nama");
        const email = searchParams.get("email");
        const kota = searchParams.get("kota");
        const telp = normalizeIDPhone(searchParams.get("telp"));
        const username = searchParams.get("username");
        const password = searchParams.get("password");
        const domain = searchParams.get("domain");
        const token = process.env.API_TOKEN;

        if (!domain || !token) {
            return NextResponse.json(
                { error: "Domain atau token tidak ditemukan" },
                {
                    status: 400,
                    headers: { "Access-Control-Allow-Origin": "*" },
                }
            );
        }

        const params = new URLSearchParams({
            domain,
            token,
            nama,
            name: nama,
            email,
            alamat: kota,
            username,
            password,
        });

        if (telp) params.append("telp", telp);

        const url = `https://autosukses2u.co.id/apps/daftar?${params.toString()}`;

        console.log("📤 Data dikirim:", Object.fromEntries(params));
        console.log("🌐 Fetching:", url);

        // Tambahkan timeout supaya gak nunggu terlalu lama
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 detik

        const res = await fetch(url, {
            method: "GET",
            signal: controller.signal,
        });

        clearTimeout(timeout);

        console.log("📡 Status Response:", res.status, res.statusText);

        const text = await res.text();
        console.log("📥 Raw response:", text);

        try {
            const json = JSON.parse(text);
            return NextResponse.json(json, {
                status: 200,
                headers: { "Access-Control-Allow-Origin": "*" },
            });
        } catch {
            return new Response(text, {
                status: 200,
                headers: { "Access-Control-Allow-Origin": "*" },
            });
        }
    } catch (error) {
        console.error("❌ Error:", error.message);
        return NextResponse.json(
            { error: error.message },
            {
                status: 500,
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        );
    }
}

// handle preflight request (CORS)
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
