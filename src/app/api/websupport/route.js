import { NextResponse } from "next/server";

export async function GET(req) {
    // 🔎 1. Cek token dari environment
    console.log("🔎 ENV.API_TOKEN:", process.env.API_TOKEN);

    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    const token = process.env.API_TOKEN;

    // 🔎 2. Cek parameter yang diterima
    console.log("🔎 Domain:", domain);
    console.log("🔎 Token dipakai:", token);

    const fallback = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    if (!domain || !token) {
        console.log("⚠️ Domain atau token tidak ada");
        return NextResponse.json(fallback, {
            headers: { "Access-Control-Allow-Origin": "*" },
            status: 400,
        });
    }

    const url = `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=${token}`;
    console.log("🌐 Fetching URL:", url); // 🔎 3. Pastikan URL final benar

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        console.log("🔎 Status response:", res.status); // 🔎 4. Status dari API eksternal

        const text = await res.text();
        console.log("🔎 Raw response text:", text);     // 🔎 5. Body mentah

        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            console.error("❌ JSON parse error:", e.message);
            return NextResponse.json(fallback, {
                headers: { "Access-Control-Allow-Origin": "*" },
                status: 500,
            });
        }

        console.log("🔎 Parsed data:", data);           // 🔎 6. Objek hasil parsing

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

        console.log("✅ Data dikirim ke client:", dataObj); // 🔎 7. Hasil final

        return NextResponse.json(dataObj, {
            headers: { "Access-Control-Allow-Origin": "*" },
        });
    } catch (err) {
        console.error("❌ Fetch error:", err.message);
        return NextResponse.json(fallback, {
            headers: { "Access-Control-Allow-Origin": "*" },
            status: 500,
        });
    }
}