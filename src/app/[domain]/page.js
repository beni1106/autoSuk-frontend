"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function PageDomain() {
    const searchParams = useSearchParams();
    const domain = searchParams.get("nama_orang") || "cahyo"; // default 'cahyo'

    const [kontak, setKontak] = useState(null);

    useEffect(() => {
        Cookies.set("domain", domain, { expires: 7, path: "/" });

        async function fetchKontak() {
            try {
                const res = await fetch(
                    `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=BAS2025`
                );
                const data = await res.json();
                setKontak(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchKontak();
    }, [domain]);

    if (!kontak) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Kontak {domain}</h1>
            <pre>{JSON.stringify(kontak, null, 2)}</pre>
        </div>
    );
}