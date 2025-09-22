"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function PageDomain() {
    const [domain, setDomain] = useState("hamsul hasan");
    const [kontak, setKontak] = useState(null);

    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        const namaOrang = sp.get("nama_orang") || "hamsul hasan";

        setDomain(namaOrang);
        Cookies.set("domain", namaOrang, { expires: 7, path: "/" });

        async function fetchKontak() {
            try {
                const res = await fetch(`https://autosukses2u.co.id/apps/getWebsupport?domain=${namaOrang}&token=BAS2025`);
                const data = await res.json();
                setKontak(data);
            } catch (err) {
                console.error(err);
                setKontak({ error: "Gagal fetch kontak" });
            }
        }

        fetchKontak();
    }, []);

    if (!kontak) return <p>Loading...</p>;

    return (
        <div>
            <h1>Kontak {domain}</h1>
            <pre>{JSON.stringify(kontak, null, 2)}</pre>
        </div>
    );
}
