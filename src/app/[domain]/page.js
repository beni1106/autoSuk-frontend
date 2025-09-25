"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PageDomain({ params }) {
    const router = useRouter();
    const { domain } = params; // slug dari path

    useEffect(() => {
        if (domain) {
            // simpan slug ke cookie
            Cookies.set("domain", domain, { expires: 7, path: "/" });

            // redirect ke home dengan query
            router.replace(`/?domain=${domain}`);
        }
    }, [domain, router]);

    return null;
}
