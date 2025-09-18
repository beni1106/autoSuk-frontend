"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import PageDomain from "../[domain]/page";

export default function PageDaftar() {
    const [domain, setDomain] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const savedDomain = Cookies.get("domain");
        if (!savedDomain) {
            router.push("/");
        } else {
            setDomain(savedDomain);
        }
    }, [router]);

    if (!domain) {
        return <p className="text-center pt-20">Loading...</p>;
    }

    return <PageDomain params={{ domain }} />;
}
