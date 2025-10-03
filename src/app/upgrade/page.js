"use client";

export const dynamic = "force-dynamic";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import { PhoneCall } from "lucide-react";
import KontakSection from "../kontak/page";

export default function UpgradePage() {
    // Nomor WhatsApp tujuan (format internasional tanpa +)
    const whatsappNumber = "6285239843334";

    const plans = [
        {
            title: "PAKET BASIC",
            price: "Rp 1.850.000",
            sub: "1 Paket Hak Usaha",
            features: [
                "Dapat Produk 12 Box Bebas Pilih (Senilai 2,1 Juta)",
                "Potensi Bonus Pengembangan 750.000/Hari",
                "1x Motor Cash 20 Juta",
                "1x Mobil Cash 150 Juta",
                "1x Pajero Cash 500 Juta",
                "1x Rumah Cash 1 Milyar",
                "1x Uang Cash 1,5 Milyar",
            ],
            total: "Total Bonus Prestasi Senilai 3,17M",
        },
        {
            title: "PAKET PREMIUM",
            price: "Rp 5.350.000",
            sub: "3 Paket Hak Usaha",
            features: [
                "Dapat Produk 36 Box Bebas Pilih (Senilai 6,3 Juta)",
                "Potensi Bonus Pengembangan 2.250.000/Hari",
                "3x Motor Cash 20 Juta",
                "3x Mobil Cash 150 Juta",
                "3x Pajero Cash 500 Juta",
                "3x Rumah Cash 1 Milyar",
                "3x Uang Cash 1,5 Milyar",
            ],
            total: "Total Bonus Prestasi Senilai 9,51M",
        },
        {
            title: "PAKET VIP",
            price: "Rp 12.350.000",
            sub: "7 Paket Hak Usaha",
            features: [
                "Dapat Produk 84 Box Bebas Pilih (Senilai 14,7 Juta)",
                "Potensi Bonus Pengembangan 5.250.000/Hari",
                "7x Motor Cash 20 Juta",
                "7x Mobil Cash 150 Juta",
                "7x Pajero Cash 500 Juta",
                "7x Rumah Cash 1 Milyar",
                "7x Uang Cash 1,5 Milyar",
            ],
            total: "Total Bonus Prestasi Senilai 22,19M",
        },
        {
            title: "PAKET VVIP",
            price: "Rp 26.350.000",
            sub: "15 Paket Hak Usaha",
            features: [
                "Dapat Produk 180 Box Bebas Pilih (Senilai 31,5 Juta)",
                "Potensi Bonus Pengembangan 11.250.000/Hari",
                "15x Motor Cash 20 Juta",
                "15x Mobil Cash 150 Juta",
                "15x Pajero Cash 500 Juta",
                "15x Rumah Cash 1 Milyar",
                "15x Uang Cash 1,5 Milyar",
            ],
            total: "Total Bonus Prestasi Senilai 47,55M",
        },
    ];

    return (
        <>
            {/* Meta SEO */}
            <Head>
                <title>Upgrade Kemitraan | PT BASS</title>
                <meta
                    name="description"
                    content="Pilih paket upgrade kemitraan PT BASS mulai dari Basic, Premium, VIP hingga VVIP dengan potensi bonus miliaran rupiah."
                />
                <meta property="og:title" content="Upgrade Kemitraan | PT BASS" />
                <meta
                    property="og:description"
                    content="Paket kemitraan dengan potensi bonus hingga miliaran rupiah. Mulai dari Paket Basic hingga VVIP."
                />
                <meta property="og:type" content="website" />
            </Head>



            <main>
                {/* Hero Section */}
                <section className="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-gray-200 py-20 text-center mt-16">
                    <div className="container mx-auto px-4">
                        <motion.h1
                            className="text-3xl md:text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Paket Join Bisnis PT BASS
                        </motion.h1>
                        <p className="max-w-3xl mx-auto text-lg opacity-90">
                            Pilihan Paket Pembelanjaan Sebagai Kemitraan & Upgrade di PT BASS.
                            Mulai bisnis syariah modal kecil & nikmati bonus hingga miliaran rupiah.
                        </p>
                    </div>
                </section>

                {/* Paket Section */}
                <section className="w-full py-20 bg-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-stretch">
                            {plans.map((plan, index) => (
                                <motion.article
                                    key={index}
                                    className="flex flex-col h-full"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 12px 25px rgba(0,0,0,0.4)",
                                    }}
                                >
                                    <Card className="shadow-lg border rounded-2xl overflow-hidden flex flex-col h-full bg-white text-gray-800">
                                        <CardHeader className="bg-emerald-400 text-white text-center py-4">
                                            <CardTitle className="text-xl font-bold uppercase tracking-wide">
                                                {plan.title}
                                            </CardTitle>
                                            <p className="text-lg font-semibold">{plan.price}</p>
                                            <p className="text-sm opacity-90">{plan.sub}</p>
                                        </CardHeader>

                                        <CardContent className="p-6 flex flex-col flex-grow justify-between">
                                            <div>
                                                <ul className="space-y-2 mb-6 text-sm md:text-base">
                                                    {plan.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="text-emerald-600 font-bold text-center">
                                                    {plan.total}
                                                </p>
                                            </div>

                                            {/* Tombol CTA */}
                                            <a
                                                href={`https://wa.me/${whatsappNumber}?text=Halo%20saya%20ingin%20upgrade%20ke%20${encodeURIComponent(plan.title)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center py-3"
                                            >
                                                Hubungi VIA WhatsApp
                                            </a>
                                        </CardContent>
                                    </Card>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
                <KontakPage />
            </main>
        </>
    );
}
