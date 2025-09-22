"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function PageDomain() {
    const [domain, setDomain] = useState(null);
    const [kontak, setKontak] = useState(null);

    const fallback = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        const namaOrang = sp.get("nama_orang") || "hamsul hasan";

        setDomain(namaOrang);
        Cookies.set("domain", namaOrang, { expires: 7, path: "/" });

        async function fetchKontak() {
            try {
                const res = await fetch(`https://autosukses2u.co.id/apps/getWebsupport?domain=${namaOrang}&token=BAS2025`);
                const data = await res.json();

                // ✅ Jika API gagal/return error → pakai fallback
                if (data?.error) {
                    setKontak(fallback);
                } else {
                    setKontak(data);
                }
            } catch (err) {
                console.error(err);
                // ✅ Pakai fallback saat fetch error
                setKontak(fallback);
            }
        }

        fetchKontak();
    }, []);

    if (!kontak) return <p>Loading...</p>;

    return (
        <div>
            <h1>Kontak {domain}</h1>
            <p>Nama: {kontak.name}</p>
            <p>WhatsApp: {kontak.whatsapp}</p>
        </div>
    );
}
