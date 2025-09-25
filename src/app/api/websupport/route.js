import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    const token = process.env.API_TOKEN;

    const fallback = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    if (!domain || !token) {
        return NextResponse.json(fallback, {
            headers: {
                "Access-Control-Allow-Origin": "https://basspreneur.com", // ⬅️ ganti spesifik
                "Access-Control-Allow-Credentials": "true",
            },
            status: 400,
        });
    }

    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;

    try {
        const res = await fetch(url);
        const text = await res.text();

        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            return NextResponse.json(fallback, {
                headers: {
                    "Access-Control-Allow-Origin": "https://basspreneur.com",
                    "Access-Control-Allow-Credentials": "true",
                },
                status: 500,
            });
        }

        let dataObj = fallback;
        if (Array.isArray(data) && data.length > 0) {
            const item = data[0];
            if ((item.error === false || item.error === "false") && item.name && item.whatsapp) {
                dataObj = { name: item.name, whatsapp: item.whatsapp };
            }
        } else if (data && typeof data === "object") {
            if ((data.error === false || data.error === "false") && data.name && data.whatsapp) {
                dataObj = { name: data.name, whatsapp: data.whatsapp };
            }
        }

        const response = NextResponse.json(dataObj, {
            headers: {
                "Access-Control-Allow-Origin": "https://basspreneur.com", // ⬅️ harus spesifik
                "Access-Control-Allow-Credentials": "true",
            },
        });

        // 🔹 Set cookie cross-domain
        response.cookies.set("domain", domain, {
            httpOnly: false,   // biar bisa dibaca di client js-cookie
            secure: true,      // wajib kalau pakai SameSite=None
            sameSite: "none",  // biar cookie bisa nyebrang iframe
            path: "/",
            maxAge: 60 * 60,   // 1 jam
        });

        return response;
    } catch (err) {
        return NextResponse.json(fallback, {
            headers: {
                "Access-Control-Allow-Origin": "https://basspreneur.com",
                "Access-Control-Allow-Credentials": "true",
            },
            status: 500,
        });
    }
}

// 🔹 Tambahkan preflight untuk OPTIONS
export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            "Access-Control-Allow-Origin": "https://basspreneur.com",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
        },
    });
}
