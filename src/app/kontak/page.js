"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Script from "next/script";
import Cookies from "js-cookie";

export default function KontakSection() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const domain = Cookies.get("domain");

        const fetchData = async () => {
            try {
                if (!domain) {
                    // fallback default
                    setData({
                        name: "Hamsul Hasan",
                        whatsapp: "6281911846119",
                    });
                    return;
                }

                const res = await fetch(`/api/websupport?domain=${domain}`);
                const result = await res.json();

                if (result.error || !Array.isArray(result) || result.length === 0) {
                    // fallback default
                    setData({
                        name: "Hamsul Hasan",
                        whatsapp: "6281911846119",
                    });
                } else {
                    setData(result[0]);
                }
            } catch (err) {
                // fallback default
                setData({
                    name: "Hamsul Hasan",
                    whatsapp: "6281911846119",
                });
            }
        };

        fetchData();
    }, []);

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 pt-35 bg-emerald-400"
            id="kontak"
        >
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

            {/* H1 Utama */}
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
                        {/* Avatar Kontak */}
                        <div className="flex flex-col items-center mb-6">
                            <div
                                className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center shadow-md"
                                aria-label="Ikon Telepon"
                            >
                                <Phone className="w-10 h-10 text-emerald-500" aria-hidden="true" />
                            </div>
                            <p className="mt-4 font-semibold">{data.name}</p>
                            <p className="text-sm text-gray-300">{data.whatsapp}</p>
                        </div>

                        {/* Tombol WhatsApp */}
                        <motion.a
                            href={`https://wa.me/${data.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Hubungi ${data.name} via WhatsApp`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg mb-4"
                        >
                            HUBUNGI via WHATSAPP
                        </motion.a>
                    </>
                ) : (
                    <p>Loading...</p>
                )}

                {/* Tombol Daftar */}
                <motion.a
                    href="/daftar"
                    aria-label="Daftar Sekarang di Bisnis PT BASS"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="block w-full border-2 border-white hover:bg-gray-200 hover:text-gray-800 font-bold py-3 px-4 rounded-xl transition"
                >
                    DAFTAR SEKARANG
                </motion.a>
            </motion.div>
        </section>
    );
}
