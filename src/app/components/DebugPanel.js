"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function DebugPanel() {
    const searchParams = useSearchParams();
    const domain = searchParams.get("domain");
    const [apiData, setApiData] = useState(null);
    const [cookieDomain, setCookieDomain] = useState(null);

    useEffect(() => {
        // Log domain dari URL
        console.log("🔎 URL domain:", domain);

        // Coba baca cookie
        const saved = Cookies.get("domain");
        setCookieDomain(saved || "(cookie kosong)");
        console.log("🔎 Cookie domain:", saved);

        // Coba fetch API jika ada domain
        if (domain) {
            fetch(`/api/websupport?domain=${domain}`)
                .then((res) => {
                    console.log("🔎 API Status:", res.status);
                    return res.json();
                })
                .then((data) => {
                    console.log("🔎 API Data:", data);
                    setApiData(data);
                })
                .catch((err) => console.error("❌ API Error:", err));
        }
    }, [domain]);

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "rgba(0,0,0,0.85)",
                color: "lime",
                padding: "10px",
                fontSize: "12px",
                zIndex: 9999,
            }}
        >
            <div>🔎 Query domain: {domain || "(tidak ada)"}</div>
            <div>🔎 Cookie domain: {cookieDomain}</div>
            <div>🔎 API Data: {JSON.stringify(apiData)}</div>
        </div>
    );
}
