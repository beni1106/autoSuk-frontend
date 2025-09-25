"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Script from "next/script";
import Cookies from "js-cookie";

export default function KontakPage() {
    const [domain, setDomain] = useState(null);
    const [data, setData] = useState(null);

    const fallback = { name: "Hamsul Hasan", whatsapp: "6281911846119" };

    // 🔹 Ambil domain dari URL atau cookies
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const d = params.get("domain");

        if (d) {
            setDomain(d);
            Cookies.set("domain", d, { expires: 7 });
        } else {
            const saved = Cookies.get("domain");
            setDomain(saved || null);
        }
    }, []);

    // 🔹 Fetch data ke API
    useEffect(() => {
        if (!domain) {
            setData(fallback);
            return;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/websupport?domain=${domain}`);
                if (!res.ok) throw new Error("Fetch error");

                const result = await res.json();
                let contact = null;

                if (Array.isArray(result) && result.length > 0) {
                    contact = result[0];
                } else if (result?.name && result?.whatsapp) {
                    contact = result;
                }

                setData(contact || fallback);
            } catch (err) {
                console.error("❌ Error fetch:", err);
                setData(fallback);
            }
        };

        fetchData();
    }, [domain]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-emerald-400">
            {/* Structured Data JSON-LD */}
            {data && (
                <Script
                    id="ld-json-kontak"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: data.name,
                            telephone: data.whatsapp,
                            url: `https://wa.me/${data.whatsapp}`,
                            jobTitle: "Mitra BGN - SSBTEAM",
                        }),
                    }}
                />
            )}

            {/* H1 */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-gray-200 max-w-3xl mb-12"
            >
                Segera Daftarkan Diri Anda di Bisnis{" "}
                <span className="text-gray-800">PT BASS</span> Bersama Komunitas{" "}
                <span className="text-gray-800">BASSPRENEUR</span>
            </motion.h1>

            {/* Card Kontak */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-gray-200"
            >
                <h2 className="text-2xl font-bold mb-4">Butuh Bantuan?</h2>
                <p className="mb-6 text-gray-200">
                    Hubungi saya sekarang untuk informasi lebih lanjut tentang peluang bisnis PT BASS.
                </p>

                {data ? (
                    <>
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
                                <Phone className="w-10 h-10 text-emerald-500" />
                            </div>
                            <p className="mt-4 font-semibold">{data.name}</p>
                            <p className="text-sm text-gray-300">{data.whatsapp}</p>
                        </div>

                        <motion.a
                            href={`https://wa.me/${data.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg mb-4"
                        >
                            HUBUNGI via WHATSAPP
                        </motion.a>
                    </>
                ) : (
                    <p>Loading...</p>
                )}

                <motion.a
                    href="/daftar"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full border-2 border-white hover:bg-gray-200 hover:text-gray-800 font-bold py-3 px-4 rounded-xl transition"
                >
                    DAFTAR SEKARANG
                </motion.a>
            </motion.div>
        </section>
    );
}
