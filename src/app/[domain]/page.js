"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function PageDomain({ params }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Ambil domain dari URL dynamic route (/cahyo) atau query (?nama_orang=...)
    const domain = params?.domain || searchParams.get("nama_orang") || "cahyo";

    const [kontak, setKontak] = useState(null);

    useEffect(() => {
        if (domain) {
            // simpan cookie supaya bisa dipakai di halaman lain
            Cookies.set("domain", domain, { expires: 7, path: "/" });

            // Kalau akses lewat /cahyo → redirect ke home
            if (params?.domain) {
                router.replace("/");
                return; // stop, jangan lanjut fetch
            }
        }

        // Kalau bukan redirect (misalnya query param langsung) → fetch data
        async function fetchKontak() {
            try {
                const res = await fetch(
                    `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=BAS2025`
                );
                const data = await res.json();
                setKontak(data);
            } catch (err) {
                console.error("Gagal ambil data:", err);
            }
        }

        fetchKontak();
    }, [domain, params, router]);

    if (params?.domain) {
        // Sementara kosong, karena langsung redirect
        return null;
    }

    if (!kontak) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Kontak {domain}</h1>
            <pre>{JSON.stringify(kontak, null, 2)}</pre>
        </div>
    );
}
