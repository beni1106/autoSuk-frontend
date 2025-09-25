"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PageDomain({ params }) {
    const router = useRouter();
    const { domain } = params;

    useEffect(() => {
        if (domain) {
            // simpan domain ke cookie
            Cookies.set("domain", domain, { expires: 7, path: "/" });

            // redirect ke home dengan query biar langsung kebaca
            const t = setTimeout(() => {
                router.replace(`/?domain=${domain}`);
            }, 200); // kasih delay dikit biar cookie terset
            return () => clearTimeout(t);
        }
    }, [domain, router]);

    return null;
}
