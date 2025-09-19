"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { CACHE_ONE_YEAR } from "next/dist/lib/constants";

export default function PageDomain({ params }) {
    const router = useRouter();
    const { domain } = use(params); // ✅ cara baru

    useEffect(() => {
        const value = domain || "cahyo"; // default ke "cahyo"
        Cookies.set("domain", value, { expires: 7, path: "/" });
        setTimeout(() => {
            router.replace("/");
        }, 300);

    }, [domain, router]);


    return (
        <div className="flex items-center justify-center min-h-screen bg-emerald-400">
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
                <p className="text-gray-700 font-medium">
                    Mengalihkan ke beranda...
                </p>
            </div>
        </div>
    );
}
