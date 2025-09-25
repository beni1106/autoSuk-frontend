"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PageDomain({ params }) {
    const router = useRouter();
    const { domain } = params;

    useEffect(() => {
        async function processDomain() {
            if (domain) {
                // 1. simpan domain ke cookie
                Cookies.set("domain", domain, { expires: 7, path: "/" });

                // 2. fetch API
                try {
                    const res = await fetch(
                        `https://autosukses2u.co.id/apps/getWebsupport?domain=${domain}&token=BAS2025`
                    );
                    const data = await res.json();

                    // Simpan hasil fetch ke cookie/localStorage
                    Cookies.set("kontak", JSON.stringify(data), { expires: 1, path: "/" });
                } catch (err) {
                    console.error("Gagal fetch:", err);
                }

                // 3. redirect ke home
                router.replace("/");
            }
        }

        processDomain();
    }, [domain, router]);

    return <p>Loading data {domain}...</p>;
}
