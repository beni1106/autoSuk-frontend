"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function PageDomain({ params }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Ambil domain dari route (/cahyo) atau query (?nama_orang=cahyo)
    const domain = params?.domain || searchParams.get("nama_orang") || "cahyo";

    const [kontak, setKontak] = useState(null);

    useEffect(() => {
        if (!domain) return;

        // 1. simpan cookie
        Cookies.set("domain", domain, { expires: 7, path: "/" });

        // 2. fetch data
        async function fetchKontak() {
            try {
                const res = await fetch(
                    `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=BAS2025`
                );
                const data = await res.json();
                setKontak(data);

                // 3. redirect setelah data siap
                router.replace("/");
            } catch (err) {
                console.error("Gagal ambil data:", err);
                router.replace("/"); // tetap redirect walau gagal fetch
            }
        }

        fetchKontak();
    }, [domain, router]);

    if (!kontak) {
        return <p>Loading data untuk {domain}...</p>;
    }

    // Optional: tampilkan data sebentar sebelum redirect
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Mengambil data {domain}...</h1>
            <pre>{JSON.stringify(kontak, null, 2)}</pre>
            <p>Redirecting ke home...</p>
        </div>
    );
}
