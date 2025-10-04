import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    const token = process.env.API_TOKEN;

    const fallback = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    if (!domain || !token) {
        return NextResponse.json(fallback, {
            status: 400,
            headers: corsHeaders(),
        });
    }

    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;

    try {
        const res = await fetch(url);
        const text = await res.text();
        let parsed;

        try {
            parsed = JSON.parse(text);
        } catch {
            return NextResponse.json(fallback, { status: 500, headers: corsHeaders() });
        }

        let data = fallback;
        if (
            Array.isArray(parsed) &&
            parsed[0]?.name &&
            parsed[0]?.whatsapp &&
            (parsed[0].error === false || parsed[0].error === "false")
        ) {
            data = { name: parsed[0].name, whatsapp: parsed[0].whatsapp };
        } else if (
            parsed?.name &&
            parsed?.whatsapp &&
            (parsed.error === false || parsed.error === "false")
        ) {
            data = { name: parsed.name, whatsapp: parsed.whatsapp };
        }

        const response = NextResponse.json(data, { headers: corsHeaders() });

        response.cookies.set("domain", domain, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
            path: "/",
            maxAge: 60 * 60,
        });

        return response;
    } catch {
        return NextResponse.json(fallback, { status: 500, headers: corsHeaders() });
    }
}

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders(true) });
}

function corsHeaders(isPreflight = false) {
    return {
        "Access-Control-Allow-Origin": "https://basspreneur.com",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Expose-Headers": "Set-Cookie",
        ...(isPreflight && {
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }),
    };
}
