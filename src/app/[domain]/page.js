"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PageDomain({ params }) {
    const router = useRouter();
    const { domain } = params;

    useEffect(() => {
        // simpan domain ke cookie
        if (domain) {
            Cookies.set("domain", domain, { expires: 7, path: "/" });
        }

        // redirect ke halaman utama
        router.replace("/");
    }, [domain, router]);

    return null; // kosong aja, soalnya langsung redirect
}
